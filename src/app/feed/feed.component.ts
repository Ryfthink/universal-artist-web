import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../app.service';
import {FeedModel} from './feed.model';

import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {

  private options = {
    columnWidth: '.grid-sizer',
    itemSelector: '.item',
    transitionDuration: 100,
    percentPosition: true
  } as Masonry.Options;

  @ViewChild('grid')
  private grid: ElementRef;

  private needLayout = false;

  private masonry: Masonry;

  public tag = '';

  public links = [
    {tag: '', label: 'All', link: '/feed'},
    {tag: 'brand', label: 'Branding', link: '/feed/brand'},
    {tag: 'illustration', label: 'Illustration', link: '/feed/illustration'},
    {tag: 'uiux', label: 'UI UX', link: '/feed/uiux'},
  ];

  data?: FeedModel[];

  constructor(private route: ActivatedRoute, private service: AppService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.requestFeedList(params.tag).subscribe(list => {
        this.needLayout = true;
        this.data = list;
      });
    });
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
    if (this.needLayout) {
      this.needLayout = false;
      this.masonry = new Masonry(this.grid.nativeElement, this.options);
    }
  }

  ngOnDestroy() {
    if (this.masonry) {
      this.masonry.destroy();
    }
  }
}
