import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';

import {cards} from './cards';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-waterfall',
  templateUrl: './waterfall.component.html',
  styleUrls: ['./waterfall.component.scss']
})
export class WaterfallComponent implements AfterViewInit, OnDestroy {

  @ViewChild('grid')
  public grid: ElementRef;

  public masonryInstance: Masonry;

  public cards = cards;

  // constructor(@Inject(Masonry) public masonry) { }

  ngAfterViewInit() {
    const options: Masonry.Options = {
      itemSelector: '.card',
      columnWidth: '.card',
      gutter: 20,
      fitWidth: true
    };
    this.masonryInstance = new Masonry(this.grid.nativeElement, options);
  }

  ngOnDestroy() {
    this.masonryInstance.destroy();
  }
}
