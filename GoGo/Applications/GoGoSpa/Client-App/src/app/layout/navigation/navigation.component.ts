import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isRole: string;

  constructor(private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('tokenKey');

    if (token == null || token == "undefined") {
      this.router.navigate(['login']);
    }

    const tokenKey = JSON.parse(token);
    const currentToken = JSON.stringify(tokenKey.access_token);

    // decode the token to get its payload
    const tokenPayload = decode(currentToken);
    var role = tokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    this.isRole = role;
  }

}
