import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post/post.component';
import {FlexboxComponent} from './flexbox/flexbox.component';
import {WaterfallComponent} from './waterfall/waterfall.component';
import {CardColumnComponent} from './card-column/card-column.component';
import {Waterfall2Component} from './waterfall2/waterfall2.component';
import {GridComponent} from './grid/grid.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full'
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'flexbox',
    component: FlexboxComponent
  },
  {
    path: 'waterfall',
    component: WaterfallComponent,
  },
  {
    path: 'waterfall2',
    component: Waterfall2Component,
  },
  {
    path: 'card-column',
    component: CardColumnComponent
  },
  {
    path: 'grid',
    component: GridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
