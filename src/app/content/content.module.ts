import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentRoutingModule} from './content-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from './markdown/markdown.module';
import {ContentComponent} from './content.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MarkdownModule.forRoot(),
    ContentRoutingModule
  ],
  declarations: [ContentComponent]
})
export class ContentModule {
}
