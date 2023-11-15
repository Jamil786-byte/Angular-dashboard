import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'; // Note the import syntax here

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() sidenavStatus: boolean = false;

  token:any = localStorage.getItem("tokenKey");
  decodedToken: any;

  list: any = [
    {
      routerLink: 'main-dashboard',
      label: 'Dashboard',
      icon: 'fas fa-home-lg-alt',
    },
    // {
    //   routerLink: 'child-hooks',
    //   label: 'Child Hooks',
    //   icon: 'fas fa-child'
    // },
    // {
    //   routerLink: 'vin-generation/vin-generation',
    //   label: 'VIN Generation',
    //   icon: 'fas fa-transgender-alt'
    // },
    {
      routerLink: 'users/contact-us',
      label: 'Contact Us',
      icon: 'fa fa-phone-alt',
    },
    {
      routerLink: 'users',
      label: 'Users',
      icon: 'fas fa-user',
    },
    {
      routerLink: 'orders/order',
      label: 'Order',
      icon: 'fas fa-shopping-cart',
    },
    {
      routerLink: 'users/profile',
      label: 'Profile',
      icon: 'fas fa-cog',
    },

  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.decodedToken = jwt_decode(this.token);
  }

  signout(){
    localStorage.removeItem("tokenKey");
    this.router.navigate(['/login']);
  }
}
