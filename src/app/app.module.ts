import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UaService} from './ua.service';
import {ShopComponent} from './shop/shop.component';
import {ContactComponent} from './contact/contact.component';
import {SeedComponent} from './seed/seed.component';
import {LazyLoadImagesModule} from 'ngx-lazy-load-images';
import {ImgAppearDirective} from './util/img-appear.directive';
import {TouchHoverDirective} from './util/touch-hover.directive';
import {BackTopComponent} from './util/back-top/back-top.component';
import {QiniuImgPipe} from './util/qiniu-img.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    SeedComponent,
    BackTopComponent,
    ImgAppearDirective,
    TouchHoverDirective,
    QiniuImgPipe
  ],
  imports: [
    LazyLoadImagesModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    UaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
