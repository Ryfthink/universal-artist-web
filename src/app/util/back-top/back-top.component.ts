import {AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';

// import * as jQuery from 'jquery';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent implements AfterViewInit {

  @Input() position = 400;

  @ViewChild('backTop') _selector: ElementRef;

  opacity = 0;

  ngAfterViewInit() {
    this.onWindowScroll();
  }

  @HostListener('click')
  onClick(): boolean {
    this.toTop();
    return true;
  }

  toTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.opacity = window.scrollY > this.position ? 0.4 : 0;
  }
}

