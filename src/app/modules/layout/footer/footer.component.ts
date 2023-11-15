import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges, DoCheck {

  @Input() data: string = '';
  constructor() {
    // console.log('Constructor called');

  }

  ngOnInit(): void {
    // console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngDoCheck(): void {

  }
}
