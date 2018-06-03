import {InjectionToken, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import {Waterfall2Component} from './demo/waterfall2/waterfall2.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {DetailComponent} from './detail/detail.component';
import {ShopGuard} from './shop/shop.guard';
import {ShopComponent} from './shop/shop.component';

export const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/illustration',
    component: HomeComponent
  },
  {
    path: 'home/brand',
    component: HomeComponent
  },
  {
    path: 'home/uiux',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'waterfall2',
    component: Waterfall2Component,
  },
  {
    path: 'shop',
    canActivate: [ShopGuard],
    component: ShopComponent
  },
  {
    path: 'about',
    component: ContactComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'home/brand',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        // todo
      },
    }
  ]
})
export class AppRoutingModule {
}
