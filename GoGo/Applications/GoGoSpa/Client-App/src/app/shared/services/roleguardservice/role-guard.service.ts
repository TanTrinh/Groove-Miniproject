import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../authservices/auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // ActivatedRouteSnapshot
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('tokenKey');

    if (token != null && token != "undefined") {
      const tokenKey = JSON.parse(token);
      const currentToken = JSON.stringify(tokenKey.access_token);

      // decode the token to get its payload
      const tokenPayload = decode(currentToken);
      var role = tokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

      if (!this.auth.isAuthenticated() || role !== expectedRole) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
