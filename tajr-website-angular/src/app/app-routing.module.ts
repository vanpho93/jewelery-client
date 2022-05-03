import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthguardService} from './services/authguard.service';
import {PreventMemberService} from './services/prevent.member.service';
import {DashboardDefaultComponent} from './views/dashboard-default/dashboard-default.component';
import {DashboardNotfoundpageComponent} from './views/dashboard-notfoundpage/dashboard-notfoundpage.component';
import {DashboardLoginComponent} from './views/membership-area/dashboard-login/dashboard-login.component';
import {DashboardRegisterComponent} from './views/membership-area/dashboard-register/dashboard-register.component';
import {DashboardListAnItemComponent} from './views/membership-area/dashboard-list-an-item/dashboard-list-an-item.component';
import {DashboardContactComponent} from './views/dashboard-contact/dashboard-contact.component';
import {AllCategoriesResolve} from './server-side-rendering/resolves/all.categories.resolve';
import {CategoriesDetailsResolve} from './server-side-rendering/resolves/categories.details.resolve';

const routes: Routes = [
  {
    path: '',
    component: DashboardDefaultComponent,
    resolve: { // SSR data
      allCategoriesRs: AllCategoriesResolve,
      categoriesDetailsRs : CategoriesDetailsResolve,
    }
  },
  {
    path: 'login',
    canActivate: [PreventMemberService], // not allow member already login
    runGuardsAndResolvers: 'always', // always check
    component: DashboardLoginComponent
  },
  {
    path: 'register',
    canActivate: [PreventMemberService],
    runGuardsAndResolvers: 'always',
    component: DashboardRegisterComponent
  },
  {
    path: 'list-an-item',
    canActivate: [AuthguardService], // Prevent user is not login
    runGuardsAndResolvers: 'always',
    component: DashboardListAnItemComponent,
    resolve: {
      allCategoriesRs: AllCategoriesResolve,
      categoriesDetailsRs : CategoriesDetailsResolve
    }
  },
  {
    path: 'contact',
    component: DashboardContactComponent
  },
  {
    path: 'notfound',
    component: DashboardNotfoundpageComponent
  },
  {
    path: '**',
    component: DashboardNotfoundpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'top'
})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
