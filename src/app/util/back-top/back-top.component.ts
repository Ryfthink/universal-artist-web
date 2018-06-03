import {AfterViewInit, Component, HostListener} from '@angular/core';

// import * as jQuery from 'jquery';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent implements AfterViewInit {

  opacity = 0;

  ngAfterViewInit() {
    this.onWindowScroll();
  }

  @HostListener('click')
  onClick(): boolean {
    this.smoothScroll();
    return true;
  }

  private smoothScroll() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(() => this.smoothScroll());
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.opacity = window.scrollY > 400 ? 0.4 : 0;
  }
}

