import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

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

      this.id = this.route.snapshot.paramMap.get('id');

      this.http.get('http://localhost:62772/api/user/edit?id=' + this.id, httpOptions).subscribe(result => {
        if (result) {
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

      this.http.put('http://localhost:62772/api/user/edit?id=' + id, this.model, httpOptions).subscribe(result => {
        if (result) {
          this.data = result;
          console.log(this.data);
          this.router.navigate(['home/detail', this.data.value]);
        }
      }, e => {
        console.log(e);
      });
    }
  }

  back() {
    this.location.back();
  }
}
