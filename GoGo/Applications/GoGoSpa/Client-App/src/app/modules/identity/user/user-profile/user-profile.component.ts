import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfile } from './UserProfile';
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/shared/components/dialog/notification.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  data: any = {};
  public userProfile = new UserProfile();
  public lStorage = localStorage.length;
  public message: string = null;
  public isError: boolean = false;

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

      this._http.get('http://localhost:62772/api/user/profile', httpOptions).subscribe(result => {
        this.data = result;
        this.userProfile = this.data;
        //this.userProfileEdit = JSON.parse(JSON.stringify(this.userProfile));
      });
    }
    
  }

  //confirm(id) {
  //  var key = localStorage.getItem('tokenKey');
  //  var currentKey = JSON.parse(key);
  //  if (this.lStorage != 0) {
  //    var httpOptions = {
  //      headers: new HttpHeaders({
  //        'Content-Type': 'application/json',
  //        'Authorization': 'Bearer ' + currentKey.access_token
  //      })
  //    };
      
  //    this._http.put('http://localhost:62772/api/user/edit/profile?id=' + id, this.userProfileEdit, httpOptions).subscribe(result => {
  //      if (result) {
  //        this.userProfile = JSON.parse(JSON.stringify(this.userProfileEdit));
  //        this.data = result;
  //        //this._renderer.setElementAttribute(this._el, 'data-dismiss', 'modal');
  //        //this._renderer.setElementAttribute(this._el, 'data-toggle', 'modal');
  //        //this._renderer.setElementAttribute(this._el, 'data-target', '#EditMessage');

  //        //this._router.navigate(['home/profile']);
  //        $('#btn-smessage').attr('data-target','#EditMessage')
  //      }
  //    }, error => {
  //      this.isError = true;

  //      let httpError: HttpErrorResponse = error;
  //      if (httpError.status === 400) {

  //        this.message = httpError.error.message;
  //      } else {
  //        this._notificationService.prompError(httpError.message);
  //      }
  //    });
  //  }
  //}

  edit(id) {
    this._router.navigate(['home/profile/edit', id]);
  }

  back() {
    this._location.back();
  }

}
