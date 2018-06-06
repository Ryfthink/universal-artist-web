import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ShopGuard} from './shop/shop.guard';
import {ShopComponent} from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'content',
    loadChildren: './content/content.module#ContentModule',
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
})
export class AppRoutingModule {
}
