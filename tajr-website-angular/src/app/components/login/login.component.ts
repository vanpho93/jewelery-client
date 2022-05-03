import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {HttpHelperService} from 'src/app/services/http-helper.service';
import {AccountService} from '../../services/account.service';
import {LoginDetails} from '../../modules/models/login.details';
import {ProfileDetails} from '../../modules/models/profile.details';
import {LanguageService} from '../../services/language.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {MOBILE_NUMBER_REGEX, PASSWORD_REGEX, PREVIOUS_URL, TAJR_PERSONAL_DETAILS} from '../..//shared/global';
import {NotificationServices} from '../../services/notification.services';
import {SessionStorageService} from '../../server-side-rendering/storages/session.storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// message show when valid modal input value
  requireMobileNumberMessage = this.languageService.findMessageByLanguage('requireMobileNumber');
  regexMobileNumberMessage = this.languageService.findMessageByLanguage('regexMobileNumber');
  requirePasswordrMessage = this.languageService.findMessageByLanguage('requirePassword');
  someThingWentWrongMessage = this.languageService.findMessageByLanguage('someThingWentWrong');
  loginMess = this.languageService.findMessageByLanguage('logIn');
  loadingMess = this.languageService.findMessageByLanguage('loading');
  youHaveLoggedInSuccessfullyMess = this.languageService.findMessageByLanguage('youHaveLoggedInSuccessfully');

  // login modal input regex
  // form builder to manage login modal form
  loginForm: FormGroup;
  // attribute to show loading button
  loading = false;
  // login detail send to server.
  loginDetails: LoginDetails;
  // error message response from server
  errorMessage: string;
  // user login status : true is login, false is logout
  userInLoginStatus = false;
  // user details receive from server
  profileDetails: ProfileDetails;
  // user details save from cookie
  userDetails: ProfileDetails;

  constructor(
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
    private notify: NotificationServices,
    private sessionStorageService: SessionStorageService
  ) {
    // Form validation
    this.loginForm = this.formBuilder.group({
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

  ngOnInit() {}

  /**
   * used to validate the user by send request to login.
   */
  login() {
    // reset previous error message
    this.errorMessage = '';
    // If loginForm input is valid
    if (this.loginForm.valid) {
      // change loading status to show loading when sending request
      this.loading = true;
      // import use login detail, format {'mobile_number':'0987654321','password':'Abc@123$}.
      this.loginDetails = new LoginDetails();
      this.loginDetails.mobile_number = this.loginForm.value.mobile_number;
      this.loginDetails.password = this.loginForm.value.password;
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
              // change user login status
              this.userInLoginStatus = true;
              // get user details
              this.profileDetails = currentUserDetails.body;
              // save value for cookie storage
              this.sessionStorageService.set(TAJR_PERSONAL_DETAILS, JSON.stringify(currentUserDetails.body));
              // close loading status on button
              this.loading = false;
              // redirect to home page
              this.router.navigate(['/']);
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
          this.loginForm.reset();
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
