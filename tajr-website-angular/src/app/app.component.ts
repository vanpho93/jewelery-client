import {Component, OnDestroy, OnInit,} from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';
import {Subscription} from 'rxjs';

import {AccountService} from './services/account.service';
import {HttpHelperService} from './services/http-helper.service';
import {
  TAJR_PERSONAL_DETAILS,
  TAJR_VERSION
} from './shared/global';
import {ProductService} from './services/product.service';
import {environment} from '../environments/environment';
import {TimeService} from './services/time.service';
import {TitleService} from './services/title.service';
import {SessionStorageService} from './server-side-rendering/storages/session.storage.service';
import {LocalStorageService} from './server-side-rendering/storages/local.storage.service';

class TajrVersion {
  date = '';
  version = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public tajrVersion: TajrVersion;
  public showContent = false;

  constructor(
    // service send request to login
    private accountService: AccountService,
    // contain api
    private httpHelper: HttpHelperService,
    // service send request to get product information
    private productService: ProductService,
    // parse time service
    private timeService: TimeService,
    private titleService: TitleService,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
    // Setting up the bootstrap version manually
    setTheme('bs4');
  }

  /**
   * When Tajr project was loaded will available some request to get value, collect in here prepare for server rendering
   */
  ngOnInit(): void {
    this.titleService.setDefaultDataStructureForPage();
    // check Tajr frontend version and expiry date
    if (!this.localStorageService.get(TAJR_VERSION)) {
      this.tajrVersion = new TajrVersion();
      this.tajrVersion.version = environment.version;
      this.tajrVersion.date = Date.now().toString();
      this.localStorageService.set(TAJR_VERSION, JSON.stringify(this.tajrVersion));
    } else {
      // clear all Tajr information if Tajr web version change and reload page to get new information
      this.tajrVersion = JSON.parse(this.localStorageService.get(TAJR_VERSION));
      if (this.tajrVersion.version !== environment.version) {
        this.localStorageService.clear();
        this.sessionStorageService.clear();
        window.location.reload();
      }
      // clear all Tajr information if Tajr web data has expired and reload page to get new information
      const current = Date.now();
      const difference = this.timeService.convertMS(current - Number(this.tajrVersion.date));
      if (difference.day > environment.expiryDate) {
        this.localStorageService.clear();
        this.sessionStorageService.clear();
        window.location.reload();
      }
    }

    // get user details login request;
    if (!this.sessionStorageService.get(TAJR_PERSONAL_DETAILS)) {
      this.subscription = this.accountService.getUserDetail().subscribe(currentUserDetails => {
        // if user has information response
        if (200 == currentUserDetails.status && currentUserDetails.body) {
          // save value for cookie storage
          this.sessionStorageService.set(TAJR_PERSONAL_DETAILS, JSON.stringify(currentUserDetails.body));
        }
      });
    }

    setTimeout(() => this.showContent = true, 1000);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
