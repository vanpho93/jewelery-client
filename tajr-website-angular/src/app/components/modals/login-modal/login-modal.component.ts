import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MOBILE_NUMBER_REGEX, PASSWORD_REGEX, SMOOTH, TAJR_PERSONAL_DETAILS} from '../../../shared/global';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginDetails} from '../../../modules/models/login.details';
import {AccountService} from '../../../services/account.service';
import {HttpHelperService} from '../../../services/http-helper.service';
import {LanguageService} from '../../../services/language.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {NotificationServices} from '../../../services/notification.services';
import {ProfileDetails} from '../../../modules/models/profile.details';
import {SessionStorageService} from '../../../server-side-rendering/storages/session.storage.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
// message show when valid modal input value
  requireMobileNumberMessage = this.languageService.findMessageByLanguage('requireMobileNumber');
  regexMobileNumberMessage = this.languageService.findMessageByLanguage('regexMobileNumber');
  requirePasswordrMessage = this.languageService.findMessageByLanguage('requirePassword');
  someThingWentWrongMessage = this.languageService.findMessageByLanguage('someThingWentWrong');
  loginMess = this.languageService.findMessageByLanguage('logIn');
  loadingMess = this.languageService.findMessageByLanguage('loading');
  youHaveLoggedInSuccessfullyMess = this.languageService.findMessageByLanguage('youHaveLoggedInSuccessfully');

  // form builder to manage login modal form
  public loginModalForm: FormGroup;
  // attribute to show loading button
  public loading = false;
  // login detail send to server.
  public loginDetails: LoginDetails;
  // error message response from server
  public errorMessage: string;
  // user details receive from server
  public profileDetails: ProfileDetails;
  public screenWidth: number;

  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    // manage form input
    private formBuilder: FormBuilder,
    // service send request to login
    private accountService: AccountService,
    // contain api
    private httpHelper: HttpHelperService,
    // get language message from local
    private languageService: LanguageService,
    // Router service use to get value from url
    private route: ActivatedRoute,
    private router: Router,
    // AuthService use to check user login data sane in cookie
    private  authService: AuthService,
    // service send request to login
    private notify: NotificationServices,
    private elementRef: ElementRef,
    private sessionStorageService: SessionStorageService,
  ) {
    // Form validation
    this.loginModalForm = this.formBuilder.group({
      // input mobile_number: default value empty, require has value and has 10 digit number.
      mobile_number: ['', Validators.compose([
        Validators.required,
        Validators.pattern(MOBILE_NUMBER_REGEX)])],
      // input password: default value empty, require has value.
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(PASSWORD_REGEX)])]
    });
  }

  ngOnInit() {
    // get width of device
    this.screenWidth = window.innerWidth;
  }

  /**
   * use HostListener to  updated on resize:
   * @param event event hold when responsive
   */
  @HostListener('window:resize', ['$event'])
  getScreenSize(event) {
    this.screenWidth = window.innerWidth;
  }

  /**
   * close login model
   */
  closeModal(): void {
    this.dialogRef.close();
  }

  login() {
    // reset previous error message
    this.errorMessage = '';
    // If loginModalForm input is valid
    if (this.loginModalForm.valid) {
      // change loading status to show loading when sending request
      this.loading = true;
      // import use login detail, format {'mobile_number':'0987654321','password':'Abc@123$}.
      this.loginDetails = new LoginDetails();
      this.loginDetails.mobile_number = this.loginModalForm.value.mobile_number;
      this.loginDetails.password = this.loginModalForm.value.password;
      // send request
      this.accountService.validateUser(this.loginDetails).subscribe(userValidation => {
        // if user login success and response has user information in body
        if (userValidation.status === 200 && userValidation.body) {
          // show notification when login success
          this.notify.showInfoNotificationMessage(this.youHaveLoggedInSuccessfullyMess);
          // send request to get user details
          this.accountService.getUserDetail().subscribe(currentUserDetails => {
            // if user has information response
            if (currentUserDetails.status === 200 && currentUserDetails.body) {
              // get user details
              this.profileDetails = currentUserDetails.body;
              // close login modal
              this.closeModal();
              // close loading status on button
              this.loading = false;
              // save value for cookie storage
              this.sessionStorageService.set(TAJR_PERSONAL_DETAILS, JSON.stringify(currentUserDetails.body));
              // redirect on current url to check guard on router
              this.router.navigateByUrl(this.router.url);
            }
          }, error => {
            // close loading status on button
            this.loading = false;
          });
        }
      }, err => {
        // User login fail, close loading status on button
        this.loading = false;
        // get error message response from server
        if (err && err.error) {
          // reset login modal form input
          this.loginModalForm.reset();
          // show error
          this.errorMessage = this.languageService.messageFromServer(err.error.message);
        } else {
          // service error message
          this.errorMessage = this.someThingWentWrongMessage;
        }
      });
    }
  }
}
