import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserProfileEdit } from './UserProfileEdit';
import { NotificationService } from 'src/app/shared/components/dialog/notification.service';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
  id: any = {};
  public modelHard = {
    dob: '06/09/1996',
    address: '132 Hàm Nghi, Quận 1, Tp. Hồ Chí Minh'
  };
  public model: any = {
    email: '',
    phoneNumber: ''
  };
  public message: string = null;
  public isError: boolean = false;
  public lStorage = localStorage.length;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    private _notificationService: NotificationService
  ) { }

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

      this._http.get('http://localhost:62772/api/user/edit/profile?id=' + this.id, httpOptions).subscribe(result => {
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

      this._http.put('http://localhost:62772/api/user/edit/profile?id=' + id, this.model, httpOptions).subscribe(result => {
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
