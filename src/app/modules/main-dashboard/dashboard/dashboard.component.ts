import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from 'src/app/shared/services/data.service';
import { Product } from './product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  constructor() {}

  ngOnInit(): void {
    let promise = new Promise((resolve) => {
      setInterval(() => {
        resolve('Promise resolve work');
      }, 1000);
      resolve('Promise resolve work');
    });

    promise.then((data: any) => {
      console.log(data);
    });

    let observable = new Observable((sub) => {
      let counter = 0;
      setInterval(() => {
        counter++;
        sub.next(counter);
      }, 1000);
    });

   this.subscription = observable.subscribe((data: any) => {
      console.log('Observable', data);
    });

    setTimeout(()=>{
      this.subscription.unsubscribe();
    }, 10000)
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
