import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  randomCode: any;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    // this.interval = setInterval(() => {
    //   this.getColor();
    // }, 1000);
  }

  getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    this.randomCode = '#' + randomNumber.toString(16);
    document.body.style.backgroundColor = this.randomCode;
    navigator.clipboard.writeText(this.randomCode);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    // performing cleanup task here
    clearInterval(this.interval);
  }
}
