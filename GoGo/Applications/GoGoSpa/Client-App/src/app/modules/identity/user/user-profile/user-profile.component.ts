import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfile } from './UserProfile';
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/shared/component/dialog/notification.service';
import { UserConfigService } from '../../../../shared/configs/user-config/user-config.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  data: any = {};
  baseUrl: string;
  public userProfile = new UserProfile();
  public lStorage = localStorage.length;
  public message: string = null;
  public isError: boolean = false;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    private _notificationService: NotificationService,
    private _configService: UserConfigService
  ) {
    this.baseUrl = _configService.getUserProfileURI();
  }

  ngOnInit() {
    var key = localStorage.getItem('tokenKey');
    var currentKey = JSON.parse(key);
    if (this.lStorage != 0) {
      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + currentKey.access_token
        })
      };

      this._http.get(this.baseUrl, httpOptions).subscribe(result => {
        this.data = result;
        this.userProfile = this.data;
      });
    }
    
  }

  edit(id) {
    this._router.navigate(['home/profile/edit', id]);
  }

  back() {
    this._location.back();
  }

}
