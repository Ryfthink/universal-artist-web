import {Component, OnInit} from '@angular/core';
import {UaService} from '../ua.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  content: '';

  constructor(private service: UaService) {
  }

  ngOnInit() {
    this.service.reqestAboutMe()
      .subscribe(content => {
        this.content = content || '';
      });
  }

}
