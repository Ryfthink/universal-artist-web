import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { WaterfallComponent } from './waterfall/waterfall.component';


// import { MasonryModule } from './shared/masonry/masonry.module';
import { CardColumnComponent } from './card-column/card-column.component';
import { Waterfall2Component } from './waterfall2/waterfall2.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FlexboxComponent,
    WaterfallComponent,
    CardColumnComponent,
    Waterfall2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MasonryModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
