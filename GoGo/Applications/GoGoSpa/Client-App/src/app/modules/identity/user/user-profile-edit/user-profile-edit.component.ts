import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserProfileEdit } from './UserProfileEdit';
import { NotificationService } from 'src/app/shared/components/dialog/notification.service';
import { UserConfigService } from '../../../../shared/configs/user-config/user-config.service';
import { UserCreateComponent } from '../user-create/user-create.component';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
  id: any = {};
  public model: any = {
    email: '',
    phoneNumber: ''
  };
  baseUrlProfileInfoBeEdit: string;
  baseUrlProfileEdit: string;
  public message: string = null;
  public isError: boolean = false;
  public lStorage = localStorage.length;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    private _notificationService: NotificationService,
    private _configService: UserConfigService
  ) {
    this.baseUrlProfileInfoBeEdit = _configService.getUserProfileInfoBeEditURI();
    this.baseUrlProfileEdit = _configService.getUserProfileEditURI();
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

      this.id = this._route.snapshot.paramMap.get('id');

      this._http.get(this.baseUrlProfileInfoBeEdit + this.id, httpOptions).subscribe(result => {
        console.log(result);
        this.model = result;
      });
    }
  }

  save(id) {
    var key = localStorage.getItem('tokenKey');
    var currentKey = JSON.parse(key);
    if (this.lStorage != 0) {
      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + currentKey.access_token
        })
      };

      this._http.put(this.baseUrlProfileEdit + id, this.model, httpOptions).subscribe(result => {
        if (result) {
          this._router.navigate(['home/profile']);
        }
      }, error => {
        this.isError = true;

        let httpError: HttpErrorResponse = error;
        if (httpError.status === 400) {

          this.message = httpError.error.message;
        } else {
          this._notificationService.prompError(httpError.message);
        }
      });
    }
  }

  back() {
    this._location.back();
  }
}
