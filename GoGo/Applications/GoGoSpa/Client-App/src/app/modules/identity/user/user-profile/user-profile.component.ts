import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfile } from './UserProfile';
import { UserProfileEdit } from './UserProfileEdit';
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/shared/components/dialog/notification.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  data: any = {};
  public userProfile = new UserProfile();
  public userProfileEdit = new UserProfileEdit();
  public lStorage = localStorage.length;
  public message: string = null;
  public isError: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
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

      this.http.get('http://localhost:62772/api/user/profile', httpOptions).subscribe(result => {
        this.data = result;
        this.userProfile = this.data;
        this.userProfileEdit = JSON.parse(JSON.stringify(this.userProfile));
      });
    }
    
  }

  confirm(id) {
    var key = localStorage.getItem('tokenKey');
    var currentKey = JSON.parse(key);
    if (this.lStorage != 0) {
      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + currentKey.access_token
        })
      };

      this.userProfile = JSON.parse(JSON.stringify(this.userProfileEdit));

      this.http.put('http://localhost:62772/api/user/edit/profile?id=' + id, this.userProfile, httpOptions).subscribe(result => {
        if (result) {
          this.data = result;
          this.router.navigate(['home/profile']);
          //$('#btn-smessage').attr('data-target','#EditMessage')
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
    this.location.back();
  }

}
