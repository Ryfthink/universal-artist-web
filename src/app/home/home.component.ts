import {Component, OnInit} from '@angular/core';
import {AfterViewInit, Component, OnInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {UaService} from '../ua.service';
import {Seed} from './model/seed';

import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  category: string = null;

  links = [
    {category: '', label: 'All'},
    {category: 'illustration', label: 'Illustration'},
    {category: 'brand', label: 'Branding'},
    {category: 'uiux', label: 'UI UX'},
  ];

  data: Seed[] = null;


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
        console.log(result);
        this.data = result;
      });
  }
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