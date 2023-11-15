import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  title = 'angular14';
  sidenavStatus: boolean = true;
  prodName!: string;
  prodPrice!: number;

  data: string = '';
  counter: number = 0;
  subscription!: Subscription;
  constructor() {}

  ngOnInit(): void {}
}
