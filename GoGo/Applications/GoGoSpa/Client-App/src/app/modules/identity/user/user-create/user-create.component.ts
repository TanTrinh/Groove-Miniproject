import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  data: any = {};
  public model = {
    username: '',
    password: '',
    repassword: '',
    email: '',
    phonenumber: '',
    role: ''
  };
  public lStorage = localStorage.length;

  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location
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
      };

      this.http.post('http://localhost:62772/api/user/create', this.model, httpOptions).subscribe(result => {
        this.data = result;
        this.router.navigate(['home/detail', this.data.value]);
      });
    }
  }

  back() {
    this.location.back();
  }
}
