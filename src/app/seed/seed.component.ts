import {Component, Input, OnInit} from '@angular/core';
import {Seed} from './seed';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.scss']
})
export class SeedComponent implements OnInit {

  @Input() index = 0;

  @Input() seed: Seed;

  constructor() {
  }

  ngOnInit() {
  }

}
