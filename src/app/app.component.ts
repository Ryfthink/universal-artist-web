import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentUrl: string;

  links = [
    {label: 'home', link: '/home'},
    {label: 'shop', link: '/shop'},
    {label: 'about', link: '/about'},
    {label: 'contact', link: '/contact'},
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.currentUrl = (value as NavigationEnd).url;
      }
    });
  }
}
