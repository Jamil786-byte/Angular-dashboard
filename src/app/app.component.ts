import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular14';
  sidenavStatus!: boolean;
  prodName!: string;
  prodPrice!: number;

  data: string = '';
  counter: number = 0;
  subscription!: Subscription;

  constructor() {}

  ngOnInit(): void {}

  getUser(value: string) {
    this.data = value;
  }

  onSubmitProd() {}
}
