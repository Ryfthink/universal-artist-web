import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {cards} from '../waterfall/cards';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-waterfall2',
  templateUrl: './waterfall2.component.html',
  styleUrls: ['./waterfall2.component.scss']
})
export class Waterfall2Component implements AfterViewInit, OnDestroy {

  @ViewChild('masonry')
  public grid: ElementRef;

  public masonryInstance: Masonry;

  // https://codepen.io/vur/pen/bNPQyK

  ngAfterViewInit() {
    const options: Masonry.Options = {
      itemSelector: '.item',
      columnWidth: '.grid-sizer',
      gutter: 20,
      fitWidth: true,
      transitionDuration: 0
    };
    this.masonryInstance = new Masonry(this.grid.nativeElement, options);
  }

  ngOnDestroy() {
    this.masonryInstance.destroy();
  }
}

/*
$('.masonry').masonry({
  "columnWidth": ".grid-sizer",
	"itemSelector": ".item",
  transitionDuration: 0,
  "percentPosition": true });
 */
