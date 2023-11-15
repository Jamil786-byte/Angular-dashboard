import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-hook',
  templateUrl: './child-hook.component.html',
  styleUrls: ['./child-hook.component.scss'],
})
export class ChildHookComponent implements OnInit, OnChanges, DoCheck {
  @Input() parentData: any;
  @Input() products: any;

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called', this.products);
  }
}
