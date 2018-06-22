import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from './UserProfile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  data: any = {};
  public userProfile: UserProfile = this.data;
  public lStorage = localStorage.length;

  constructor(
    private http: HttpClient
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

      this.http.get('http://localhost:62772/api/user/get', httpOptions).subscribe(result => {
        this.data = result;
        this.userProfile = this.data;
      });
    }
    
  }

}
