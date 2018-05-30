import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  category: String = null;

  links = [
    {category: '', label: 'All'},
    {category: 'illustration', label: 'Illustration'},
    {category: 'brand', label: 'Branding'},
    {category: 'uiux', label: 'UI UX'},
  ];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
    });
  }

  ngOnInit() {
  }

}
