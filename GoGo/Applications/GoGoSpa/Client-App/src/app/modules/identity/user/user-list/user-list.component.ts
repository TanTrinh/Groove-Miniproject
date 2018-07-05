import { Component, OnInit } from '@angular/core';
import { UserList } from './UserList';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParamsOptions, HttpParams } from '@angular/common/http/src/params';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  data: any = {};
  userList: UserList[];
  total: number;
  currentpage: number;
  id: number;
  selectOption: string = "";
  public lStorage = localStorage.length;

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  paginators = [];
  ngOnInit() {
    this.selectOption = 'Customer';
    this.loadList();
  }

  loadList() {
    var key = localStorage.getItem('tokenKey');
    var currentKey = JSON.parse(key);
    if (this.lStorage != 0) {
      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + currentKey.access_token
        })
      };
      console.log(this.selectOption);
      // TODO: replace this.id by role name
      // TODO: Remove all if/else statement, use only one statement only

      // TODO: Move all HTTPs request relate to user API into seperated service
      // You need to create UserService in ../../identity/user/user.service.ts
      //
      // then you call _userService.GetAll({role:this.role}).subcrible(result=>{
      // })
      //
      // httpOptions, API url... will be managed by API service
      if (this.selectOption == 'Customer') {
        this.id = 1;

        this._http.get('http://localhost:54520/api/user/list?id=' + this.id, httpOptions).subscribe(result => {
          this.data = result;
          this.userList = this.data;
        });
      }
      else if (this.selectOption == 'Driver') {
        this.id = 2;
        this._http.get('http://localhost:54520/api/user/list?id=' + this.id, httpOptions).subscribe(result => {
          this.data = result;
          this.userList = this.data;
        });
      }
      else if (this.selectOption == 'Coordinator') {
        this.id = 3;
        this._http.get('http://localhost:54520/api/user/list?id=' + this.id, httpOptions).subscribe(result => {
          this.data = result;
          this.userList = this.data;
        });
      }
      else {
        this.id = 4
        this._http.get('http://localhost:54520/api/user/list?id=' + this.id, httpOptions).subscribe(result => {
          this.data = result;
          this.userList = this.data;
        });
      }
    }
    
    //this.http.get('http://localhost:54520/api/user/userroles?id=' + id).subscribe(result => {
    //  this.data = result;
    //  this.userList = this.data;
    //});
  }

  loadDetail(id) {
    this._router.navigate(['account/detail', id]);
  }

  loadUpdate(id) {
    this._router.navigate(['account/edit', id])
  }

  create() {
    this._router.navigate(['account/create']);
  }
}
