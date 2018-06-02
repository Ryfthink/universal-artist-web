import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule, externalUrlProvider} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from './demo/post/post.component';
import {FlexboxComponent} from './demo/flexbox/flexbox.component';
import {WaterfallComponent} from './demo/waterfall/waterfall.component';
import {CardColumnComponent} from './demo/card-column/card-column.component';
import {Waterfall2Component} from './demo/waterfall2/waterfall2.component';
import {GridComponent} from './demo/grid/grid.component';
import {HomeComponent} from './home/home.component';
import {UaService} from './ua.service';
import {ShopComponent} from './shop/shop.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import { SeedComponent } from './seed/seed.component';
import { DetailComponent } from './detail/detail.component';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FlexboxComponent,
    WaterfallComponent,
    CardColumnComponent,
    Waterfall2Component,
    GridComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    SeedComponent,
    DetailComponent
  ],
  imports: [
    LazyLoadImagesModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    UaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
