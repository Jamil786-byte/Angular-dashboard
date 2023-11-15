import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import jwt_decode from 'jwt-decode'; // Note the import syntax here

@Injectable({
  providedIn: 'root',
})
export class AdminChildGuard implements CanActivateChild {
  token: any = localStorage.getItem('tokenKey');
  token_decode: any;

  constructor(private dataService: DataService, private router: Router) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.token_decode = jwt_decode(this.token);
    
    if (this.token_decode.userType == 'admin') {
      return true;
    } else {
      alert('Permission deniet because you are not admin');
      this.router.navigate(['/main-dashboard']);
      return false;
    }
  }
}
