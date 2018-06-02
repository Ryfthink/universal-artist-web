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

  category: string = null;

  links = [
    {category: '', label: 'All'},
    {category: 'illustration', label: 'Illustration'},
    {category: 'brand', label: 'Branding'},
    {category: 'uiux', label: 'UI UX'},
  ];

  data: Seed[] = [];


  @ViewChild('grid')
  public grid: ElementRef;

  public masonryInstance: Masonry;

  items: Item[] = [];


  constructor(private route: ActivatedRoute, private service: UaService) {
    for (let i = 0; i < 100; i++) {
      this.items.push({
        size: Math.random() >= 0.5 ? 'large' : 'normal',
        value: '' + i
      });
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.requestData();
    });
  }

  requestData() {
    this.service.requestSeedList('brand')
      .subscribe((result: Seed[]) => {
        let tmp = [];
        for (let i = 0; i < 20; i++) {
          tmp = tmp.concat(result);
        }
        this.data = tmp.shuffle();
        // console.log(this.data);
        console.log('requestSeedList');
      });
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    if (this.data.length > 0 && !this.masonryInstance) {
      console.log('init masonry');
      const options: Masonry.Options = {
        columnWidth: '.grid-sizer',
        itemSelector: '.item',
        transitionDuration: 100,
        percentPosition: true
      };
      this.masonryInstance = new Masonry(this.grid.nativeElement, options);
    }
    if (this.masonryInstance) {
      this.masonryInstance.layout();
    }
  }

  ngOnDestroy() {
    if (this.masonryInstance) {
      this.masonryInstance.destroy();
    }
  }
}

interface Item {
  value: string;
  size: 'large' | 'normal';
}
