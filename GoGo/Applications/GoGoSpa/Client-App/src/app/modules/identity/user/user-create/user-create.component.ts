import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/shared/component/dialog/notification.service';
import { EmailvalidatorDirective } from 'src/app/shared/directives/emailvalidator.directive';
import { AdminConfigService } from '../../../../shared/configs/admin-config/admin-config.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  data: any = {};
  baseUrl: string;
  public message: string = null;
  public model = {
    username: '',
    password: '',
    repassword: '',
    email: '',
    phonenumber: '',
    role: ''
  };
  public isError: boolean = false;
  public lStorage = localStorage.length;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _location: Location,
    private _notificationService: NotificationService,
    private _configService: AdminConfigService
  ) {
    this.baseUrl = _configService.getCreateUserURI();
  }

  ngOnInit() {
    console.log(1)
  }

  onCreate() {
    var key = localStorage.getItem('tokenKey');
    var currentKey = JSON.parse(key);

    if (this.lStorage != 0) {
      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + currentKey.access_token
        })
      }

      this._http.post(this.baseUrl, this.model, httpOptions).subscribe(result => {
        this.data = result;
        this._router.navigate(['account/detail', this.data.value]);
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
