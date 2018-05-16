import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-waterfall2',
  templateUrl: './waterfall2.component.html',
  styleUrls: ['./waterfall2.component.scss']
})
export class Waterfall2Component implements AfterViewInit, OnDestroy {

  @ViewChild('grid')
  public grid: ElementRef;

  public masonryInstance: Masonry;

  items: Item[] = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.items.push({
        size: Math.random() >= 0.5 ? 'large' : 'normal',
        value: '' + i
      });
    }
  }

  // https://codepen.io/vur/pen/bNPQyK

  ngAfterViewInit() {
    // const options: Masonry.Options = {
    //   itemSelector: '.item',
    //   columnWidth: '.grid-sizer',
    //   gutter: 20,
    //   fitWidth: true,
    //   transitionDuration: 0,
    //   percentPosition: true
    // };
    /*
    {
      columnWidth: '.grid-sizer',
      itemSelector: '.item',
      transitionDuration: 0,
      percentPositio: true
    }
     */
    const options: Masonry.Options = {
      columnWidth: '.grid-sizer',
      itemSelector: '.item',
      transitionDuration: 100,
      percentPosition: true
    };
    this.masonryInstance = new Masonry(this.grid.nativeElement, options);
  }

  ngOnDestroy() {
    this.masonryInstance.destroy();
  }
}

interface Item {
  value: string;
  size: 'large' | 'normal';
}
