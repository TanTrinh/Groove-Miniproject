import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/shared/component/dialog/notification.service';
import { AdminConfigService } from '../../../../shared/configs/admin-config/admin-config.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  public model: any = {
    email: '',
    phoneNumber: '',
    role: ''
  };
  data: any = {};
  id: any = {};
  baseUrlEdit: string;
  baseUrlInfoBeEdit: string;
  public message: string = null;
  public isError: boolean = false;
  public lStorage = localStorage.length;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private _notificationService: NotificationService,
    private _configService: AdminConfigService
  ) {
    this.baseUrlInfoBeEdit = _configService.getUerInfoBeEditURI();
    this.baseUrlEdit = _configService.getEditUserURI()
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

      this.id = this.route.snapshot.paramMap.get('id');

      // TODO: Move all HTTPs request relate to user API into seperated service
      // You need to create UserService in ../../identity/user/user.service.ts
      //
      // then you call _userService.Get(this.id).subcrible(result=>{
      // })
      //
      // httpOptions, API url... will be managed by API service
      this.http.get(this.baseUrlInfoBeEdit + this.id, httpOptions).subscribe(result => {
        if (result) {
          // TODO: Remove console.log
          console.log(result);
          this.model = result;
        }
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

      id = this.route.snapshot.paramMap.get('id');

      // TODO: Move all HTTPs request relate to user API into seperated service
      // You need to create UserService in ../../identity/user/user.service.ts
      //
      // then you call _userService.Update(this.id, this.model).subcrible(result=>{
      // })
      //
      // httpOptions, API url... will be managed by API service
      this.http.put(this.baseUrlEdit + id, this.model, httpOptions).subscribe(result => {
        if (result) {
          this.data = result;
          // TODO: remove console.log
          console.log(this.data);
          this.router.navigate(['account/detail', this.data.value]);
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
    this.router.navigate(['account']);
  }
}
