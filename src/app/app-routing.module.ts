import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Waterfall2Component} from './demo/waterfall2/waterfall2.component';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

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
    path: 'waterfall2',
    component: Waterfall2Component,
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
