import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private auth: AuthService, private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isUser = this.auth.isLoggedIn();
    console.log('LoggedIn User Guard ', isUser);
    if (isUser) {
      this.router.navigate['/create-product'];
      return true ;
    }
    else {
      this.router.navigate['/login'];
       return false;
      }
  }


}
