import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UaService} from '../ua.service';

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  content: '';

  showNav = false;

  constructor(private router: ActivatedRoute, private service: UaService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.service.requestSeedContent(id)
        .subscribe(content => {
          this.content = content || 'Azhong 一定是偷懒忘记更新这篇文章了...';
          setTimeout(() => {
            this.showNav = true;
          });
        });
    });
  }

}
