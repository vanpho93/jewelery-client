import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {HttpHelperService} from 'src/app/services/http-helper.service';
import {AccountService} from '../../services/account.service';
import {LanguageService} from '../../services/language.service';
import {MOBILE_NUMBER_REGEX} from '../../shared/global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // message show when valid modal input value
  requireMobileNumberMessage = this.languageService.findMessageByLanguage('requireMobileNumber');
  regexMobileNumberMessage = this.languageService.findMessageByLanguage('regexMobileNumber');
  someThingWentWrongMessage = this.languageService.findMessageByLanguage('someThingWentWrong');
  loadingMess = this.languageService.findMessageByLanguage('loading');
  signUpMess = this.languageService.findMessageByLanguage('signUp');
  // form builder to manage login modal form
  registerMobileForm: FormGroup;
  // attribute to show loading button
  loading = false;
  // error message response from server
  errorMessage: string;

  constructor(
    // manage form input
    private formBuilder: FormBuilder,
    // service send request to login
    private accountService: AccountService,
    // contain api
    private httpHelper: HttpHelperService,
    // get language message from local
    private languageService: LanguageService,
    // go to redirect to register-confirm page
    private router: Router,
  ) {
    // Form validation
    this.registerMobileForm = this.formBuilder.group({
      // input mobile_number: default value empty, require has value and has 10 digit number.
      mobile_number: ['', Validators.compose([
        Validators.required,
        Validators.pattern(MOBILE_NUMBER_REGEX)])]
    });
  }

  ngOnInit() {
  }

  /**
   * Registration - Insert a new mobile number.
   */
  register() {
    // reset previous error message
    this.errorMessage = '';
    // If registerMobileForm input is valid
    if (this.registerMobileForm.valid) {
      // change loading status to show loading when sending request
      this.loading = true;
      // send request
      this.accountService.registration(this.registerMobileForm.value.mobile_number).subscribe(mobileValidation => {
        // if user login success and response has user information in body
        if (mobileValidation.status === 200 && mobileValidation.body) {
          // redirect to register-confirm page with mobile_number paste on url
          if (mobileValidation.body.verification_code != null) {
            // format https:// ***/register-confirm/mobile_number/verification_code : Use for development
            // this.router.navigate(['/register-confirm', mobileValidation.body.mobile_number, mobileValidation.body.verification_code]);
            this.router.navigate(['/register-confirm'],
              {queryParams: {mobileNumber: mobileValidation.body.mobile_number, verificationCode: mobileValidation.body.verification_code}});
          } else {
            // format https:// ***/register-confirm/mobile_number : Use for product
            this.router.navigate(['/register-confirm'],{queryParams: {mobileNumber: mobileValidation.body.mobile_number}});
          }
          // close loading status on button
          this.loading = false;
        }
      }, err => {
        // User login fail, close loading status on button
        this.loading = false;
        // get error message response from server
        if (err && err.error) {
          // reset login modal form input
          this.registerMobileForm.reset();
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
