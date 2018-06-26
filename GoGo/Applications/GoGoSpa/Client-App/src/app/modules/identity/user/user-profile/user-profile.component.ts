import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfile } from './UserProfile';
import { UserProfileEdit } from './UserProfileEdit';
import { Location } from '@angular/common';
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

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
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
          $('#btn-smessage').attr('data-target','#EditMessage')
        }
      });
    }
  }

  back() {
    this.location.back();
  }

}
