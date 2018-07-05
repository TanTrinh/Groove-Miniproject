import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from '../../shared/sevices/sharing-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isRole: string;

  isCoordinorOrDriver: boolean;

  constructor(private router: Router, private shareingService: SharingService) { }

  ngOnInit() {
    //if (this.shareingService.getRole() == "Coordinator" || this.shareingService.getRole() == "Driver")
    //    this.isCoordinorOrDriver = true;
    //else
    //    this.isCoordinorOrDriver = false;

    //const token = localStorage.getItem('tokenKey');

    //if (token == null || token == "undefined") {
    //    this.router.navigate(['login']);
    //}

    //const tokenKey = JSON.parse(token);
    //const currentToken = JSON.stringify(tokenKey.access_token);

    // decode the token to get its payload
    //const tokenPayload = decode(currentToken);
    var role = this.shareingService.getRole();

    this.isRole = role;
  }

}
