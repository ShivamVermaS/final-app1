import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  status: boolean = false;
  constructor() {}
  canActivate() {
    if (localStorage.getItem('email')) {
      this.status = true;
    } 
    // else {
    //   this.status = false;
    // }
    return this.status;
  }
  
}
