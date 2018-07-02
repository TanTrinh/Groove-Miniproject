import { Component, OnInit } from '@angular/core';
import { UserList } from './UserList';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParamsOptions, HttpParams } from '@angular/common/http/src/params';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { DataSourceRequestState, DataResult } from '@progress/kendo-data-query';

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

  public users: GridDataResult;
  public state: DataSourceRequestState = {
    skip: 0,
    take: 10
  };

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _userService: UserService
  ) {
    this._userService.fetch(this.state).subscribe(result => {
      console.log(result);
      this.users = result;

    });
  }

  paginators = [];
  ngOnInit() {
    //this.selectOption = 'Customer';
    //this.loadList();
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this._userService.fetch(state)
      .subscribe(r => this.users = r);
  }

  //loadList() {
  //  var key = localStorage.getItem('tokenKey');
  //  var currentKey = JSON.parse(key);
  //  if (this.lStorage != 0) {
  //    var httpOptions = {
  //      headers: new HttpHeaders({
  //        'Content-Type': 'application/json',
  //        'Authorization': 'Bearer ' + currentKey.access_token
  //      })
  //    };
  //    //  console.log(this.selectOption);
  //    //  if (this.selectOption == 'Customer') {
  //    //    this.id = 1;
  //    //    this._http.get('http://localhost:62772/api/user/list?id=' + this.id, httpOptions).subscribe(result => {
  //    //      this.data = result;
  //    //      this.userList = this.data;
  //    //    });
  //    //  }
  //    //  else if (this.selectOption == 'Driver') {
  //    //    this.id = 2;
  //    //    this._http.get('http://localhost:62772/api/user/list?id=' + this.id, httpOptions).subscribe(result => {
  //    //      this.data = result;
  //    //      this.userList = this.data;
  //    //    });
  //    //  }
  //    //  else if (this.selectOption == 'Coordinator') {
  //    //    this.id = 3;
  //    //    this._http.get('http://localhost:62772/api/user/list?id=' + this.id, httpOptions).subscribe(result => {
  //    //      this.data = result;
  //    //      this.userList = this.data;
  //    //    });
  //    //  }
  //    //  else {
  //    //    this.id = 4
  //    //    this._http.get('http://localhost:62772/api/user/list?id=' + this.id, httpOptions).subscribe(result => {
  //    //      this.data = result;
  //    //      this.userList = this.data;
  //    //    });
  //    //  }
  //    //}

  //    this._http.get('http://localhost:62772/api/user/list', httpOptions).subscribe(result => {
  //      console.log(result)
  //      this.data = result;
  //      this.userList = this.data;
  //    });
  //  }
  //}

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
