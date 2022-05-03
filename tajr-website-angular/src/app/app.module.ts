import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CollapseModule} from 'ngx-bootstrap//collapse';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DatePipe} from '@angular/common';

// service
import {TokenInterceptorService} from './services/token.interceptor.service';
import {HttpHelperService} from 'src/app/services/http-helper.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TimeService} from './services/time.service';
import {AuthguardService} from './services/authguard.service';
import {AuthService} from './services/auth.service';
import {PreventMemberService} from './services/prevent.member.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
// main components
import {AppComponent} from './app.component';
import {DashboardDefaultComponent} from './views/dashboard-default/dashboard-default.component';
import {DashboardNotfoundpageComponent} from './views/dashboard-notfoundpage/dashboard-notfoundpage.component';
import {DashboardLoginComponent} from './views/membership-area/dashboard-login/dashboard-login.component';
import {DashboardRegisterComponent} from './views/membership-area/dashboard-register/dashboard-register.component';
// element components
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ToastrModule} from 'ngx-toastr';
import {DashboardListAnItemComponent} from './views/membership-area/dashboard-list-an-item/dashboard-list-an-item.component';
import {ListAnItemComponent} from './components/list-an-item/list-an-item.component';
import {ScrollDispatcher, ScrollingModule} from '@angular/cdk/scrolling';
import {NotfoundComponent} from './components/notfound/notfound.component';
import { DashboardContactComponent } from './views/dashboard-contact/dashboard-contact.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AccountService } from './services/account.service';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {AppShellRenderComponent} from './components/app-shell-render/app-shell-render.component';
import {AppShellNoRenderDirective} from './server-side-rendering/directives/app-shell-norender.directive';
import {AppShellRenderDirective} from './server-side-rendering/directives/app-shell-render.directive';
import {LocalStorageService} from './server-side-rendering/storages/local.storage.service';
import {SessionStorageService} from './server-side-rendering/storages/session.storage.service';
import {AllCategoriesResolve} from './server-side-rendering/resolves/all.categories.resolve';
import {CategoriesDetailsResolve} from './server-side-rendering/resolves/categories.details.resolve';
import {SwiperModule} from 'swiper/angular';
import {PaginationModule} from 'ngx-bootstrap';
import {TitleService} from './services/title.service';

@NgModule({
  declarations: [
    AppShellNoRenderDirective,
    AppShellRenderDirective,
    AppComponent,
    DashboardDefaultComponent,
    DashboardNotfoundpageComponent,
    DashboardLoginComponent,
    DashboardRegisterComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    DashboardListAnItemComponent,
    ListAnItemComponent,
    NotfoundComponent,
    DashboardContactComponent,
    ContactComponent,
    LoginModalComponent,
    AppShellRenderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CollapseModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    ToastrModule.forRoot(),
    TabsModule.forRoot(),
    MatCardModule,
    NgbModule,
    DragDropModule,
    ScrollingModule,
    SwiperModule,
    PaginationModule.forRoot(),
  ],
  providers: [
    HttpHelperService,
    TimeService,
    AuthguardService,
    AuthService,
    MatDialog,
    FormBuilder,
    PreventMemberService,
    AccountService,
    DatePipe,
    ScrollDispatcher,
    LocalStorageService,
    SessionStorageService,
    AllCategoriesResolve,
    CategoriesDetailsResolve,
    TitleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  entryComponents: [
    LoginModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule {
}
