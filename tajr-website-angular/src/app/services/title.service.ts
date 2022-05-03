import {Injectable} from '@angular/core';

import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {ListingDetails} from '../modules/models/listingDetails';
import {Util} from '../utils/utils';
import {DATA_STRUCTURE_SCHEMA, FIRST_ITEM, YOUTUBE_FILE_TYPE, YOUTUBE_URL} from '../shared/global';
import {LanguageService} from './language.service';
import {DatePipe} from '@angular/common';
import {AllMotorsCategories} from '../modules/models/all.motors.categories';
import {environment} from '../../environments/environment';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Hits} from '../modules/models/hits';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  path: string[] = [];
  public defaultTitle = 'تاجر- بيع و شراء في أفضل موقع للتجاره في المملكة العربية السعودية';
  private defaultDescription = 'تاجر, بيع و شراء في أفضل موقع للتجاره في المملكة العربية السعودية. حراج سعودي يحتوي على حراج لكل السلع وحراج السيارات وحراج العقار وحراج الأجهزة';
  private logo = 'https://tajr.sa/assets/images/logo-images/tajr-round-logo.png';
  private listNoWantDefaultDataStructure = ['', 'listing', 'search'];
  private listNoWantDefaultListingItemImage = ['listing'];
  private allMotorsCategories: AllMotorsCategories;
  private tajrAllCategories;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    // get language message from local
    private languageService: LanguageService,
    // service convert date format
    private datePipe: DatePipe,
  ) {
  }

  public setCategories(tajrAllCategories: any) {
    this.tajrAllCategories = tajrAllCategories;
    this.allMotorsCategories = this.tajrAllCategories[FIRST_ITEM].subcategories[FIRST_ITEM];
  }

  public removeDataStructure() {
    if (document.getElementById(DATA_STRUCTURE_SCHEMA) != null) {
      document.getElementById(DATA_STRUCTURE_SCHEMA).remove();
    }
  }

  public createDataStructure() {
    const element = document.createElement('script');
    element.type = 'application/ld+json';
    element.id = DATA_STRUCTURE_SCHEMA;
    document.querySelector('head').appendChild(element);
  }

  public setDefaultTitleAndMetaTab() {
    this.setTitleAndMetaTab(null, null);
  }

  /**
   * Set title and description tab on listing item page
   * @param title item title
   * @param description item description
   */
  private setListingTitleAndMetaTab(title: string, description: string) {
    const titleMess = Util.isNotNullOrEmpty(title) ? title : this.defaultTitle;
    let descriptionMess = this.defaultDescription;
    if (Util.isNotNullOrEmpty(description)) {
      descriptionMess = description;
    } else if (Util.isNotNullOrEmpty(title)) {
      descriptionMess = title;
    }

    this.setTitleAndMetaTab(titleMess, descriptionMess);
  }

  public setDefaultDataStructureForPage() {
    // subscribe to the router’s events
    this.router.events.pipe(
      // check which events are the ones we need
      // filter out any events that aren’t NavigationEnd and continue the stream
      filter((event) => event instanceof NavigationEnd),
      // because we’ve injected the Router class, we can access the routerState
      map(() => {
        let route = this.activatedRoute;
        // create a while loop to traverse over the state tree to find the last activated route, and then return it to the stream
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      // Doing this to dive into the children property of the routes config to fetch the corresponding page title.
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data))
      .subscribe((url) => {
        const currentRouter = this.activatedRoute.snapshot.firstChild.routeConfig.path;
        // select router don't want set default data Structure
        if (!this.listNoWantDefaultDataStructure.includes(currentRouter)) {
          this.setDefaultDataStructure();
        }
        // select router don't want set default image
        if (!this.listNoWantDefaultListingItemImage.includes(currentRouter)) {
          this.metaService.updateTag({property: 'og:image', content: this.logo});
          this.metaService.updateTag({name: 'twitter:image', content: this.logo});
        }
      });
  }

  public setDefaultDataStructure() {
    if (document.getElementById(DATA_STRUCTURE_SCHEMA) != null) {
      document.getElementById(DATA_STRUCTURE_SCHEMA).remove();
    }

    const element = document.createElement('script');
    element.type = 'application/ld+json';
    element.text = JSON.stringify([{
      '@context': 'https://schema.org/',
      '@type': 'WebSite',
      name: this.defaultTitle,
      description: this.defaultDescription,
      url: 'https://www.tajr.sa/',
      contentLocation: 'Saudi Arabia',
      keywords: this.defaultDescription,
      version: this.showVersionFromMainpage(),
      locationCreated: 'Saudi Arabia'
    },
      {
        '@context': 'http://schema.org/',
        '@type': 'Organization',
        url: 'https://www.tajr.sa/',
        logo: this.logo
      }
    ]);
    element.id = DATA_STRUCTURE_SCHEMA;
    document.querySelector('head').appendChild(element);
  }

  /**
   * Set home page data structure from ListingDetails
   * @param Hits return from search response
   */
  public setHomePageDataStructure(hits: Hits) {
    if (Util.isNullOrEmpty(hits)) {
      return;
    }
    const item = hits;
    const script = document.getElementById(DATA_STRUCTURE_SCHEMA);
    let obj = [];
    if (script.firstChild && script.firstChild.nodeValue && JSON.parse(script.firstChild.nodeValue) != null) {
      obj = JSON.parse(script.firstChild.nodeValue);
    }
    obj[0] = {
      '@context': 'http://schema.org/',
      '@type': 'Organization',
      url: 'https://www.tajr.sa',
      logo: this.logo,
    };
    obj[1] = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: 'تاجر',
      url: 'https://tajr.sa',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.tajr.sa/search?query={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };
    obj[obj.length] = {
      '@context': 'https://schema.org/',
      '@type': 'product',
      name: item.title,
      description: item.description ? item.description : this.defaultTitle,
      productID: item.listing_id,
      mpn: item.listing_id,
      identifier: item.listing_id,
      sku: item.listing_id,
      brand: {
        '@type': 'Thing',
        name: item.category_arabic_level_3,
        url: 'https://tajr.sa/search?query=' + item.category_arabic_level_3
      },
      itemCondition: 'UsedCondition',
      url: 'https://www.tajr.sa/listings/' + item.listing_id + '/' + this.generateArabicLable(item.title),
      logo: this.logo,
      model: item.model,
      productionDate: item.year,
      purchaseDate: item.year,
      releaseDate: item.year,
      offers: {
        '@type': 'Offer',
        price: item.askingPrice,
        priceCurrency: 'SAR',
        availability: 'InStock',
        url: 'https://www.tajr.sa/listings/' + item.listing_id + '/' + this.generateArabicLable(item.title),
        priceValidUntil: item.endDate,
        seller: {
          '@context': 'http://schema.org',
          '@type': 'Person',
          name: item.username,
          url: this.generateMemberRouter(item.member_id, item.username)
        }
      },
      image: item.photo_1 != undefined ? this.showPhoto(item.photo_1, item.title) : this.logo,
      bodyType: item.bodyStyle,
      modelDate: item.year,
      vehicleModelDate: item.year,
    };

    script.innerHTML = JSON.stringify(obj);
  }

  public setSearchPageTitleAndMetaTab(searchString: string) {
    if (Util.isNullOrEmpty(searchString)) {
      this.setDefaultTitleAndMetaTab();
    }
    let searchQuery = '{searchQuery} -  الأسعار والعروض - {dateTime} | تاجر السعودية ';
    const dateTime = this.datePipe.transform(new Date(), 'yyyy-MM');
    searchQuery = searchQuery.replace('{searchQuery}', searchString);
    searchQuery = searchQuery.replace('{dateTime}', dateTime);
    this.setTitleAndMetaTab(searchQuery, searchQuery);
  }

  /**
   * Setting Custom Page Title And Meta Tags
   */
  public setTitleAndMetaTab(titleMess: string, descriptionMess: string) {
    const title = Util.isNotNullOrEmpty(titleMess) ? titleMess : this.defaultTitle;
    const description = Util.isNotNullOrEmpty(descriptionMess) ? descriptionMess : this.defaultDescription;
    // Implement global SEO tag
    this.titleService.setTitle(title);
    this.metaService.updateTag({name: 'description', content: description});
    this.metaService.updateTag({name: 'og:description', content: description});
    // add twitter SEO tag
    this.metaService.updateTag({name: 'twitter:card', content: title});
    this.metaService.updateTag({name: 'twitter:site', content: title});
    this.metaService.updateTag({name: 'twitter:title', content: title});
    this.metaService.updateTag({name: 'twitter:description', content: description});
    this.metaService.updateTag({name: 'twitter:text:description', content: description});

    // add facebook SEO tag
    this.metaService.updateTag({name: 'og:title', content: title});
    this.metaService.updateTag({name: 'og:description', content: description});
  }

  private setListingItemImage(listingDetails: ListingDetails) {
    const imageUrl = this.showPhotosAndVideo(listingDetails);
    this.metaService.updateTag({property: 'og:image', content: imageUrl});
    this.metaService.updateTag({name: 'twitter:image', content: imageUrl});
  }

  private setListingDataStructure(listingDetails: ListingDetails) {
    if (document.getElementById(DATA_STRUCTURE_SCHEMA) != null) {
      document.getElementById(DATA_STRUCTURE_SCHEMA).remove();
    }

    const element = document.createElement('script');
    element.type = 'application/ld+json';
    element.text = JSON.stringify({
      '@context': 'https://schema.org/',
      '@type': 'product',
      name: this.showAttributesValue('title', 'strings', listingDetails),
      description: this.showAttributesValue('description', 'strings', listingDetails) ? this.showAttributesValue('description', 'strings', listingDetails) : this.defaultTitle,
      productID: listingDetails.listing_id,
      mpn: listingDetails.listing_id,
      identifier: listingDetails.listing_id,
      sku: listingDetails.listing_id,
      brand: {
        '@type': 'Thing',
        name: this.showCategoryId(listingDetails),
        url: this.showCarBranch(listingDetails)
      },
      itemCondition: 'UsedCondition',
      color: this.showAttributesValue('exteriorColor', 'strings', listingDetails),
      url: 'https://www.tajr.sa/listings/' + listingDetails.listing_id + '/' + this.generateArabicLable(this.showAttributesValue('title', 'strings', listingDetails)),
      category: this.showCategoriesBreadcrumb(listingDetails),
      logo: this.logo,
      model: this.showAttributesValue('model', 'strings', listingDetails),
      productionDate: this.showAttributesValue('year', 'numbers', listingDetails),
      purchaseDate: this.showAttributesValue('year', 'numbers', listingDetails),
      releaseDate: this.showAttributesValue('year', 'numbers', listingDetails),
      offers: {
        '@type': 'Offer',
        price: this.showAttributesValue('askingPrice', 'numbers', listingDetails),
        priceCurrency: 'SAR',
        availability: 'InStock',
        url: 'https://www.tajr.sa/listings/' + listingDetails.listing_id + '/' + this.generateArabicLable(this.showAttributesValue('title', 'strings', listingDetails)),
        priceValidUntil: this.showAttributesValue('endDate', 'dates', listingDetails),
        seller: {
          '@context': 'http://schema.org',
          '@type': 'Person',
          name: listingDetails.member.username,
          url: this.generateMemberRouter(listingDetails.member.member_id, listingDetails.member.username)
        }
      },
      bodyType: this.showAttributesValue('bodyStyle', 'strings', listingDetails),
      fuelType: this.showAttributesValue('fuelType', 'strings', listingDetails),
      modelDate: this.showAttributesValue('year', 'numbers', listingDetails),
      numberOfAirbags: this.showAttributesValue('driverAirbag', 'bool', listingDetails),
      numberOfDoors: this.showAttributesValue('doors', 'numbers', listingDetails),
      vehicleInteriorColor: this.showAttributesValue('exteriorColor', 'strings', listingDetails),
      vehicleModelDate: this.showAttributesValue('year', 'numbers', listingDetails),
      image: this.showPhotosAndVideo(listingDetails),
    });
    element.id = DATA_STRUCTURE_SCHEMA;
    document.querySelector('head').appendChild(element);
  }

  /**
   * show attribute value follow language response from server
   * @param attributesId attributesId ex: model,modelDetail...
   * @param dataType dataType of attributes in strings,numbers,bool, dates
   */
  private showAttributesValue(attributesId: string, dataType: string, listingDetails: ListingDetails): string {
    let attributesValue = '';
    let attribute;
    // list dataType follow design document and api response
    const listDataType = ['strings', 'dates', 'bool', 'numbers'];
    // return if don't has value
    if (!listingDetails || !listingDetails[dataType] || !listDataType.includes(dataType)) {
      return;
    }

    switch (dataType) {
      case 'strings':
        attribute = listingDetails.strings.find(item => item.string_attribute_id === attributesId);
        if (Util.isNotNullOrEmpty(attribute)) {
          if (Util.isNullOrEmpty(attribute.value) && Util.isNotNullOrEmpty(attribute.option_display)) {
            attributesValue = this.languageService.messageFromServer(attribute.option_display);
          } else {
            attributesValue = attribute.value[0];
          }
        }
        break;
      case 'dates':
        attribute = listingDetails.dates.find(item => item.date_attribute_id === attributesId);
        if (Util.isNotNullOrEmpty(attribute)) {
          attributesValue = attribute.value[0];
          if (0 < attributesValue.length) {
            attributesValue = this.datePipe.transform(attributesValue, 'yyyy-MM-dd');
          } else {
            attributesValue = '';
          }
        }
        break;
      case 'bool':
        attribute = listingDetails.bool.find(item => item.bool_attribute_id === attributesId);
        if (Util.isNotNullOrEmpty(attribute)) {
          attributesValue = attribute.value;
          if ('true' === attributesValue) {
            attributesValue = 'Yes';
          } else {
            attributesValue = 'No';
          }
        }
        break;
      case 'numbers':
        attribute = listingDetails.numbers.find(item => item.number_attribute_id === attributesId);
        if (Util.isNotNullOrEmpty(attribute) && Util.isNotNullOrEmpty(attribute.value)) {
          attributesValue = attribute.value[0];
        } else {
          if (Util.isNotNullOrEmpty(attribute) && Util.isNotNullOrEmpty(attribute.option_display)) {
            attributesValue = this.languageService.messageFromServer(attribute.option_display);
          }
        }
        break;
      default:
        break;
    }

    if (Util.isNullOrEmpty(attributesValue)) {
      attributesValue = undefined;
    }
    return attributesValue;
  }

  /**
   * show categoriesBreadcrumb on browser
   */
  private showCategoriesBreadcrumb(listingDetails: ListingDetails): string {
    const categoriesBreadcrumb = [];

    if (this.tajrAllCategories && listingDetails) {
      // show item bread crumb
      categoriesBreadcrumb[0] = {
        router: '/',
        label: this.languageService.messageFromServer(this.tajrAllCategories[FIRST_ITEM].name)
      };
      categoriesBreadcrumb[1] = {
        router: '/',
        label: this.languageService.messageFromServer(this.allMotorsCategories.name)
      };

      const categories = this.allMotorsCategories.subcategories.find(item => item.id == listingDetails.category_id);
      categoriesBreadcrumb[2] = {
        router: '/',
        label: this.languageService.messageFromServer(categories.name)
      };

      return categoriesBreadcrumb[0].label + ' > ' + categoriesBreadcrumb[1].label + ' > ' + categoriesBreadcrumb[2].label;
    }

    return '';
  }

  /**
   * display photos
   */
  private showPhotosAndVideo(listingDetails: ListingDetails): string {
    let result = this.logo;
    if (!listingDetails) {
      return result;
    }

    if (listingDetails.photos && listingDetails.photos[1]) {
      result = environment.baseUrl + '/v1/photos/' + listingDetails.photos[1] + '/sizes/508x380';
    } else if (listingDetails.embedded_content_options && listingDetails.embedded_content_options.length > 0) {
      const videoId = listingDetails.embedded_content_options[0].value;
      result = YOUTUBE_URL + videoId + YOUTUBE_FILE_TYPE;
    }
    return result;
  }

  /**
   * Show category_id
   */
  private showCategoryId(listingDetails: ListingDetails): string {
    let result = '';
    if (Util.isNullOrEmpty(listingDetails) || Util.isNullOrEmpty(listingDetails.category_id)) {
      return result;
    }

    const categories = this.allMotorsCategories.subcategories.find(item => item.id == listingDetails.category_id);
    if (Util.isNotNullOrEmpty(categories)) {
      result = this.languageService.messageFromServer(categories.name);
    }

    return result;
  }

  /**
   * Show car branch
   */
  private showCarBranch(listingDetails: ListingDetails): string {
    let result = '';
    if (Util.isNotNullOrEmpty(this.showCategoryId(listingDetails))) {
      result = 'https://tajr.sa/search?query=' + this.showCategoryId(listingDetails);
    }
    return result;
  }

  /**
   * show version from mainpage
   * mainpage version is "date_created" attribute from all categories response
   */
  private showVersionFromMainpage() {
    if (Util.isNotNullOrEmpty(this.allMotorsCategories)) {
      return this.allMotorsCategories.date_created;
    }
    return '';
  }

  /**
   * generate Arabic lable to remove arabic blank space in arabic text
   */
  public generateArabicLable(title: string): string {
    let str = '';
    if (Util.isNullOrEmpty(title)) {
      return str;
    }
    // convert string to lower case
    title = title.toLowerCase();
    // replace arabic blank space with "-"
    let replacedStr = title.replace(/[\u202B+\u202C+\u202A+\u0020+\ +\s\s+]/g, '-');
    // replace double "-" in replacedStr
    replacedStr = replacedStr.split('--').sort().join('-');
    // format string again with title has multi string like this "---"
    for (let i = 0; i < replacedStr.length; i++) {
      if (i == 0 && replacedStr[0] == '-') {
        continue;
      }
      if (i > 0 && replacedStr[i] == '-' && replacedStr[i - 1] == '-') {
        continue;
      }
      str = str + replacedStr[i];
    }
    return str;
  }

  /**
   * generate member router follow format /members/:memberId/:username
   * @param memberId member Id
   * @param username member username
   */
  public generateMemberRouter(memberId: string, username: string): string {
    const str = '';
    if (Util.isNullOrEmpty(memberId) || Util.isNullOrEmpty(username)) {
      return str;
    }

    const url = 'https://www.tajr.sa/members/' + memberId + '/' + username;
    return url;
  }

  /**
   * Set Listing Item Page SEO Tab
   *
   * @param listingDetails listing Details object
   */
  public setListingItemPageSeoTab(listingDetails: ListingDetails) {
    const title = this.showAttributesValue('title', 'strings', listingDetails);
    const description = this.showAttributesValue('description', 'strings', listingDetails);
    // set value on meta tab
    this.setListingTitleAndMetaTab(title, description);
    // set meta image tab
    this.setListingItemImage(listingDetails);
    // set data structure
    this.setListingDataStructure(listingDetails);
  }

  showPhoto(photoId: string, title: string) {
    const noImageUrl = '../../../assets/images/item-images/tajr-item000001.png';
    const titleMess = title ? this.generateArabicLable(title) : this.generateArabicLable(this.defaultTitle);
    if (photoId !== undefined && photoId !== null) {
      return environment.baseUrl + '/v1/photos/' + photoId + '/sizes/233x176/' + titleMess;
    }
    return noImageUrl;
  }
}

