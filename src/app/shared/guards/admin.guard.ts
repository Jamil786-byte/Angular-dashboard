import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { DataService } from '../services/data.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanLoad {
  constructor(private dataService: DataService) {}
  canLoad() {
    const token: any = localStorage.getItem('tokenKey');
    this.dataService.isLoggedIn.subscribe((res) => {
      jwt_decode(token);
    });
    return true;
  }
}
