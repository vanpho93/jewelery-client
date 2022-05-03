import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../services/language.service';
import {ProductService} from '../../services/product.service';
import {AllMotorsCategories} from '../../modules/models/all.motors.categories';
import {
  ACTION,
  CREATE,
  DEFAULT_CATEGORY_ID,
  EDIT,
  ItemAttributes,
  LIST_AN_ITEM_PHOTOS,
  NOT_EMPTY_REGEX,
  LIST_AN_ITEM,
  SELL_SIMILIAR,
  SMOOTH,
  TAJR_LIST_AN_ITEM,
  FIRST_ITEM,
  TAJR_ALL_CATEGORIES_RESOURCE,
  CATEGORIES_DETAILS_RESOURCE,
  TAJR_LIST_AN_ITEM_PHOTOS,
  TAJR_LIST_AN_ITEM_FEES,
  TAJR_LIST_AN_ITEM_DETAILS,
  TAJR_CATEGORIES_DETAILS
} from '../../shared/global';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryDetails} from '../../modules/models/category.details';
import {Options} from '../../modules/models/options';
import {ListAnItemModules} from '../../modules/models/list.an.item.modules';
import {ActivatedRoute, Router} from '@angular/router';
import {Util} from '../../utils/utils';
import {SessionStorageService} from '../../server-side-rendering/storages/session.storage.service';
import {LocalStorageService} from '../../server-side-rendering/storages/local.storage.service';
import {NotificationServices} from '../../services/notification.services';


@Component({
  selector: 'app-list-an-item',
  templateUrl: './list-an-item.component.html',
  styleUrls: ['./list-an-item.component.css'],
  providers: []
})
export class ListAnItemComponent implements OnInit {
  // message show when valid input value
  requireCategoryIdMessage = this.languageService.findMessageByLanguage('requireCategoryId');
  requireModeldMessage = this.languageService.findMessageByLanguage('requireModel');
  requireKilometresMessage = this.languageService.findMessageByLanguage('requireKilometres');
  requireKilometresMinMessage = this.languageService.findMessageByLanguage('requireKilometresMin');
  requireKilometresMaxMessage = this.languageService.findMessageByLanguage('requireKilometresMax');
  regexYearMessage = this.languageService.findMessageByLanguage('regexYear');
  requireBodyStyleMessage = this.languageService.findMessageByLanguage('requireBodyStyle');
  requireSeatMinMessage = this.languageService.findMessageByLanguage('requireSeatMin');
  requireSeatMaxMessage = this.languageService.findMessageByLanguage('requireSeatMax');
  requireEngineSizeMinMessage = this.languageService.findMessageByLanguage('requireEngineSizeMin');
  requireEngineSizeMaxMessage = this.languageService.findMessageByLanguage('requireEngineSizeMax');

  //  subscription to observable request get member's listings
  public categoryDetailsByIDSubscription: Subscription;
  public allMotorsCategories: AllMotorsCategories;
  public categoryDetailsById: CategoryDetails;
  public modelOptions: Array<Options> = [];
  public yearOptions: Array<Options> = [];
  // create all categories dynamic form
  public allCategoriesForm: FormGroup;
  public submitted = false;
  public defaultCategoryId = DEFAULT_CATEGORY_ID;
  public categoryIdSlitStr = '';
  // select button default value
  public loadingModelStatus = false;
  // verify code input regex
  public notEmptyRegexPattern = NOT_EMPTY_REGEX;
  // width of screen size on browser
  public screenWidth: number;
  public listingId = '';
  public action = CREATE;
  public tajrAllCategories;

  /**
   * listAnItemModules: item detail model, default value is empty
   * this value use to show input, select default value on browser
   */
  public listAnItemModules: ListAnItemModules;

  constructor(
    // get language message from local
    private languageService: LanguageService,
    // service send request to login
    private productService: ProductService,
    private elementRef: ElementRef,
    // Router service use to get value from url
    private activatedRoute: ActivatedRoute,
    private router: Router,
    // manage form input
    private formBuilder: FormBuilder,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService,
    private notify: NotificationServices,
  ) {
    // defined allCategoriesForm to manage all input value and condition
    this.allCategoriesForm = this.formBuilder.group({
      categoryId: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.notEmptyRegexPattern)
      ])],
      // type : string
      model: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.notEmptyRegexPattern)
      ])],
      modelDetail: ['', Validators.compose([
        Validators.maxLength(65)
      ])],
      exteriorColor: ['', Validators.compose([
        Validators.maxLength(32)
      ])],
      bodyStyle: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.notEmptyRegexPattern)
      ])],
      fuelType: [''],
      mvpiExpires: ['', Validators.compose([
        Validators.maxLength(64)
      ])],
      numberPlate: ['', Validators.compose([
        Validators.maxLength(8)
      ])],
      description: ['', Validators.compose([
        Validators.max(2000)
      ])],
      // type : number
      year: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.notEmptyRegexPattern),
        Validators.min(1986),
        Validators.max((new Date()).getFullYear())
      ])],
      kilometers: ['', Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.max(2000000)
      ])],
      doors: [''],
      seats: ['', Validators.compose([
        Validators.min(1),
        Validators.max(99)
      ])],
      cylinders: [''],
      engineSize: ['', Validators.compose([
        Validators.min(1),
        Validators.max(100000)
      ])],
      transmission: [''],
      numberOfOwners: [''],
      importHistory: [''],
      // type : bool
      fourWheelDrive: [''],
      mojazInspectionReport: [''],
      driverAirbag: [''],
      sunroof: [''],
      passengerAirbag: [''],
      alarm: [''],
      powerSteering: [''],
      absBrakes: [''],
      airConditioning: [''],
      centralLocking: [''],
    });
  }

  ngOnInit() {
    // get screen of device
    this.screenWidth = window.innerWidth;

    // check local storage available all Motors Categories or not
    // if not available will send request to get get all categories
    // GET https://api.tajr.sa/v1/categories
    // use its response to show items on tab select [vehicleType]
    this.listAnItemModules = new ListAnItemModules();

    // receive value from data transfer Api
    this.tajrAllCategories = this.activatedRoute.snapshot.data[TAJR_ALL_CATEGORIES_RESOURCE];
    this.allMotorsCategories = this.tajrAllCategories[FIRST_ITEM].subcategories[FIRST_ITEM];
    this.categoryDetailsById = this.activatedRoute.snapshot.data[CATEGORIES_DETAILS_RESOURCE];
    this.modelOptions = this.showSelectTabOptionItems(ItemAttributes.MODEL);
    this.yearOptions = this.showSelectTabOptionItems(ItemAttributes.YEAR);

    // check local storage available result of previous categories details or not
    // [listAnItemModules]: is previous item after user selected and go back from step 2,3,4
    // its resultalready save in session with name [TAJR_LIST_AN_ITEM] and will be deleted if create listing success or logout
    if (this.sessionStorageService.get(TAJR_LIST_AN_ITEM)) {
      const tajrListAnItem = JSON.parse(this.sessionStorageService.get(TAJR_LIST_AN_ITEM));
      this.listAnItemModules = tajrListAnItem;
    }

    // get value from url, get action with listing item, default action is create new item
    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      if (queryParams.has(ACTION)) {
        this.action = queryParams.get(ACTION);
      }

      // check item info save success for all steps in action is edit/sellSimilar
      switch (this.action) {
        case EDIT:
          // Check in local item details must be available
          if (!this.sessionStorageService.get(TAJR_LIST_AN_ITEM) || !this.sessionStorageService.get(TAJR_LIST_AN_ITEM_PHOTOS) || !this.sessionStorageService.get(TAJR_LIST_AN_ITEM_DETAILS)) {
            this.sessionStorageService.remove(TAJR_LIST_AN_ITEM);
            this.sessionStorageService.remove(TAJR_LIST_AN_ITEM_PHOTOS);
            this.sessionStorageService.remove(TAJR_CATEGORIES_DETAILS);
            this.sessionStorageService.remove(TAJR_LIST_AN_ITEM_FEES);
            this.notify.showInfoNotificationMessage('Your listing can not edit. You will be redirected to create new listing page.');
            this.router.navigate([LIST_AN_ITEM]);
          }
          // disable tab select before send request
          this.allCategoriesForm.controls.categoryId.disable();
          break;
        case SELL_SIMILIAR:
          // Check in local item details must be available
          if (!this.sessionStorageService.get(TAJR_LIST_AN_ITEM) || !this.sessionStorageService.get(TAJR_LIST_AN_ITEM_PHOTOS) || !this.sessionStorageService.get(TAJR_LIST_AN_ITEM_DETAILS)) {
            this.sessionStorageService.remove(TAJR_LIST_AN_ITEM);
            this.sessionStorageService.remove(TAJR_LIST_AN_ITEM_PHOTOS);
            this.sessionStorageService.remove(TAJR_CATEGORIES_DETAILS);
            this.sessionStorageService.remove(TAJR_LIST_AN_ITEM_FEES);
            this.notify.showInfoNotificationMessage('Your listing can not sell similar. You will be redirected to create new listing page.');
            this.router.navigate([LIST_AN_ITEM]);
          }
          break;
        default:
          break;
      }

      // if action is default will create new empty listing
      // send request to get listing details, first step want to convert categories id format "0001-0100-0200" to "0200" use to send request follow api design doc
      // categoriesId default is "0001-0100-0200", after user selected this value will change
      if (Util.isNullOrEmpty(this.listAnItemModules.categoryId)) {
        this.categoryIdSlitStr = this.defaultCategoryId.split('-')[2];
      } else {
        this.categoryIdSlitStr = this.listAnItemModules.categoryId.split('-')[2];
      }
      // disable tab select before send request
      this.allCategoriesForm.controls.model.disable();
      this.allCategoriesForm.controls.year.disable();
      this.modelOptions = [];
      this.yearOptions = [];
      // send request to get listing
      this.categoryDetailsByIDSubscription = this.productService.getCategoryDetailsByID(this.categoryIdSlitStr).subscribe(data => {
        // if user has information response
        if (data) {
          this.categoryDetailsById = data;
          // modelOptions: variable show option list item in model input
          this.modelOptions = this.showSelectTabOptionItems(ItemAttributes.MODEL);
          this.yearOptions = this.showSelectTabOptionItems(ItemAttributes.YEAR);
          this.allCategoriesForm.controls.model.enable();
          this.allCategoriesForm.controls.year.enable();
        }
      });

    });
  }

  /**
   * use HostListener to  updated on resize:
   * @param event event when change width of device
   */
  @HostListener('window:resize', ['$event'])
  getScreenSize(event) {
    this.screenWidth = window.innerWidth;
  }

  /**
   * Get maxlength value from server response to put on input tab in browser
   * @param attributeId attribute Id
   */
  validatorsMaxLength(attributeId: string) {
    if (Util.isNullOrEmpty(this.categoryDetailsById) || Util.isNullOrEmpty(this.categoryDetailsById.attributes)) {
      return;
    }

    const attribute = this.categoryDetailsById.attributes.find(item => item.id === attributeId);

    if (Util.isNotNullOrEmpty(attribute) && Util.isNotNullOrEmpty(attribute.max_length)) {
      return Number(attribute.max_length);
    }
  }

  /**
   * Get min value from server response to put on input tab in browser
   * @param attributeId attribute Id
   */
  validatorsLower(attributeId: string): number {
    if (Util.isNullOrEmpty(this.categoryDetailsById) || Util.isNullOrEmpty(this.categoryDetailsById.attributes)) {
      return;
    }

    const attribute = this.categoryDetailsById.attributes.find(item => item.id === attributeId);

    if (Util.isNotNullOrEmpty(attribute) && Util.isNotNullOrEmpty(attribute.lower)) {
      return Number(attribute.lower);
    }
  }

  /**
   * Get max value from server response to put on input tab in browser
   * @param attributeId attribute Id
   */
  validatorsUpper(attributeId: string) {

    if (Util.isNullOrEmpty(this.categoryDetailsById) || Util.isNullOrEmpty(this.categoryDetailsById.attributes)) {
      return;
    }

    const attribute = this.categoryDetailsById.attributes.find(item => item.id === attributeId);

    if (Util.isNotNullOrEmpty(attribute) && Util.isNotNullOrEmpty(attribute.upper)) {
      return Number(attribute.upper);
    }
  }

  /**
   * event when user select item on tab [vehicleType]
   * will sendrequest to get new ite categories details
   * GET https://api.tajr.sa/v1/category-details/:category_id
   */
  getCategoryDetailsByID() {
    // reset value for model option
    this.allCategoriesForm.controls.model.disable();
    this.allCategoriesForm.controls.year.disable();
    this.modelOptions = [];
    this.yearOptions = [];

    // convert categories id format "0001-0100-0200" to "0200" use to send request follow api design doc
    if (Util.isNullOrEmpty(this.allCategoriesForm.get(ItemAttributes.CATEGORY_ID).value) || Util.isNullOrEmpty(this.allCategoriesForm.get(ItemAttributes.CATEGORY_ID).value.split('-')[2])) {
      return;
    } else {
      this.categoryIdSlitStr = this.allCategoriesForm.get(ItemAttributes.CATEGORY_ID).value.split('-')[2];
    }

    // change attribute value to show text "loading" in model option
    this.loadingModelStatus = true;
    // send request to get listing
    this.categoryDetailsByIDSubscription = this.productService.getCategoryDetailsByID(this.categoryIdSlitStr).subscribe(data => {
      // if user has information response
      if (data) {
        // This variable is an OOP containt category details for other function use and don't show on browser
        this.categoryDetailsById = data;
        // Show new model option value with current [categoryId]
        this.modelOptions = this.showSelectTabOptionItems(ItemAttributes.MODEL);
        this.yearOptions = this.showSelectTabOptionItems(ItemAttributes.YEAR);
        // reset value for model option
        this.allCategoriesForm.controls.model.enable();
        this.listAnItemModules.model = '';
        this.allCategoriesForm.controls.year.enable();
        this.listAnItemModules.year = '';
      }
      // change attribute value to hide text "loading" in model option
      this.loadingModelStatus = false;
    });
  }

  /**
   *  show attribute label follow language response from server
   */
  showAttributesLable(attributesId: string) {
    let attributesLable = '';
    // return if don't has value
    if (Util.isNullOrEmpty(this.categoryDetailsById) || Util.isNullOrEmpty(this.categoryDetailsById.attributes)) {
      return;
    }

    const attribute = this.categoryDetailsById.attributes.find(item => item.id === attributesId);

    // select label want to show from response
    if (Util.isNotNullOrEmpty(attribute) && Util.isNotNullOrEmpty(attribute.display_name)) {
      attributesLable = this.languageService.messageFromServer(attribute.display_name);
    }
    return attributesLable;
  }

  /**
   *  show option value want to show from response
   */
  showSelectTabOptionItems(attributesId: string): Array<Options> {
    let optionItems: Array<Options> = [];
    // return if don't has value
    if (Util.isNullOrEmpty(this.categoryDetailsById) || Util.isNullOrEmpty(this.categoryDetailsById.attributes)) {
      return;
    }

    const attribute = this.categoryDetailsById.attributes.find(item => item.id === attributesId);

    // select option value want to show from response
    if (Util.isNotNullOrEmpty(attribute) && Util.isNotNullOrEmpty(attribute.options)) {
      optionItems = attribute.options;
    }
    return optionItems;
  }

  /**
   * auto generate a car text title make it follow a standard car name
   */
  generatedTitleFotCarCatergories(): string {
    let generatedTitle = '';

    // manufacturer name from get category details by ID response
    if (Util.isNotNullOrEmpty(this.categoryDetailsById.name)) {
      generatedTitle += this.wrap_dir('rtl', this.languageService.messageFromServer(this.categoryDetailsById.name)) + ' ';
    }

    // model from  model option select by user
    const modelValue = this.allCategoriesForm.get(ItemAttributes.MODEL).value;
    const modelOption = this.modelOptions.find(item => item.value === modelValue && item.id !== 'Other');
    if (Util.isNotNullOrEmpty(modelValue) && Util.isNotNullOrEmpty(modelOption) && Util.isNotNullOrEmpty(modelOption.display)) {
      generatedTitle += this.wrap_dir('rtl', this.languageService.messageFromServer(modelOption.display)) + ' ';
    }

    // modelDetail from user input
    if (Util.isNotNullOrEmpty(this.allCategoriesForm.get(ItemAttributes.MODEL_DETAIL).value)) {
      generatedTitle += this.wrap_dir('rtl', this.allCategoriesForm.get(ItemAttributes.MODEL_DETAIL).value) + ' ';
    }

    // year from  year option select by user
    if (Util.isNotNullOrEmpty(this.allCategoriesForm.get(ItemAttributes.YEAR).value)) {
      generatedTitle += this.wrap_dir('rtl', this.allCategoriesForm.get(ItemAttributes.YEAR).value);
    }

    return generatedTitle;
  }

  // sorts out right to left string
  wrap_dir(dir, str) {
    if (dir === 'rtl') return '\u202B' + str + '\u202C';
    return '\u202A' + str + '\u202C';
  }

  onSubmit() {
    // value to show error
    this.submitted = true;
    if (this.allCategoriesForm.valid) {
      switch (this.action) {
        case EDIT:
          if (this.allCategoriesForm.get(ItemAttributes.CATEGORY_ID).value != this.listAnItemModules.categoryId) {
            this.notify.showWarnmingNotificationMessage('This listing category has been changed.');
            window.scroll({top: 0, behavior: SMOOTH});
            return;
          }
          break;
        default:
          break;
      }
      // form object to save in session
      const formObj = {};
      Object.keys(this.allCategoriesForm.controls).forEach(key => {
        if (Util.isNotNullOrEmpty(this.allCategoriesForm.controls[key].value)) {
          // Convert all allCategoriesForm input value to string and push in formObj
          formObj[key] = this.allCategoriesForm.controls[key].value.toString();
        } else {
          formObj[key] = '';
        }
      });
      // set value for key [title] attribute, its value will show in step 3
      formObj[ItemAttributes.TITLE] = this.generatedTitleFotCarCatergories();
      switch (this.action) {
        case EDIT:
          formObj[ItemAttributes.LISTING_ID] = this.listAnItemModules.listingId;
          break;
        default:
          break;
      }
      // save item information in local
      this.sessionStorageService.set(TAJR_LIST_AN_ITEM, JSON.stringify(formObj));

      switch (this.action) {
        case EDIT:
          // go to list-an-item-pho-to page with action edit
          this.router.navigate([LIST_AN_ITEM_PHOTOS], {queryParams: {action: EDIT}});
          break;
        case SELL_SIMILIAR:
          // go to list-an-item-pho-to page  with action sellSimilar
          this.router.navigate([LIST_AN_ITEM_PHOTOS], {queryParams: {action: SELL_SIMILIAR}});
          break;
        default:
          // go to list-an-item-pho-to page with action create
          this.router.navigate([LIST_AN_ITEM_PHOTOS], {queryParams: {action: CREATE}});
          break;
      }

    } else {
      // scroll to the top browser
      this.scrollToError();

    }
  }

  /**
   *  scroll to input has invalid value follow class "ng-invalid" was added by angular form
   */
  scrollToError(): void {
    // get the first input invalid, it is the second element has class ".ng-invalid" in angular form
    const firstElementWithError = document.querySelectorAll('.ng-invalid')[1];
    // scroll to that element if it exit
    if (firstElementWithError) {
      firstElementWithError.scrollIntoView({behavior: SMOOTH, block: 'center'});
    }
  }

}
