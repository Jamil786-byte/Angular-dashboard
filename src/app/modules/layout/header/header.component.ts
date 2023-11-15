import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sideMenu: boolean = true;
  @Output() sidenavToggled = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  sideNavToggle() {
    this.sideMenu = !this.sideMenu;
    this.sidenavToggled.emit(this.sideMenu);
  }
}
