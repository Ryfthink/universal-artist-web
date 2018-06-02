import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {UaService} from '../ua.service';
import {Seed} from '../seed/seed';

import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {

  private options = {
    columnWidth: '.grid-sizer',
    itemSelector: '.item',
    transitionDuration: 100,
    percentPosition: true
  } as Masonry.Options;

  @ViewChild('grid')
  private grid: ElementRef;

  private needLayout = false;

  public masonry: Masonry;

  public category: string = null;

  public links = [
    {category: '', label: 'All', link: '/home'},
    {category: 'brand', label: 'Branding', link: '/home/brand'},
    {category: 'illustration', label: 'Illustration', link: '/home/illustration'},
    {category: 'uiux', label: 'UI UX', link: '/home/uiux'},
  ];

  public data: Seed[] = [];

  constructor(private route: ActivatedRoute, private service: UaService) {
  }

  ngOnInit() {
    this.route.url.subscribe(segments => {
      this.category = segments[1] ? segments[1].path : '';
      console.log(this.category);
      this.requestData();
    });
  }

  requestData() {
    this.service.requestSeedList(this.category)
      .subscribe((result: Seed[]) => {
        this.needLayout = true;
        let tmp = [];
        for (let i = 0; i < 20; i++) {
          tmp = tmp.concat(result);
        }
        this.data = tmp.shuffle();
        this.data = result;
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
