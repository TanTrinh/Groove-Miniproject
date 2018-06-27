import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/shared/components/dialog/notification.service';
import { EmailvalidatorDirective } from 'src/app/shared/directives/emailvalidator.directive';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  data: any = {};
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
    private _notificationService: NotificationService
  ) { }

  ngOnInit() {
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

      this._http.post('http://localhost:62772/api/user/create', this.model, httpOptions).subscribe(result => {
        this.data = result;
        this._router.navigate(['home/detail', this.data.value]);
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
