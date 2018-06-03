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
import { ImgAppearDirective } from './util/img-appear.directive';
import { TouchHoverDirective } from './util/touch-hover.directive';
import {BackTopComponent} from './util/back-top/back-top.component';
import { QiniuImgPipe } from './util/qiniu-img.pipe';
import {MarkdownModule} from './detail/markdown/markdown.module';

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
    DetailComponent,
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
    MarkdownModule.forRoot()
  ],
  providers: [
    UaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
