import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from '../../shared/sevices/sharing-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userName: string;

    constructor(
      private router: Router,
      private shareingService: SharingService
    ) { }

  ngOnInit() {
    var name = this.shareingService.getName();

    this.userName = name;
  }

    logOut() {
        localStorage.clear();
        this.router.navigate(['login']);
    }
}
