import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from './UserProfile';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  data: any = {};
  public userProfile = new UserProfile();
  public lStorage = localStorage.length;

  constructor(
    private http: HttpClient,
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
      });
    }
    
  }

  pageBack() {
    this.location.back();
  }

}
