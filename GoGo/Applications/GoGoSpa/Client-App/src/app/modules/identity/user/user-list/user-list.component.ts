import { Component, OnInit } from '@angular/core';
import { UserList } from './UserList';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParamsOptions, HttpParams } from '@angular/common/http/src/params';
import * as $ from 'jquery';
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

  constructor(private http: HttpClient, private router: Router) { }

  paginators = [];
  ngOnInit() {
    this.loadList();
  }

  loadList() {
    //var selectOption = $('#mySelect').val();
    console.log(this.selectOption );
    if (this.selectOption == 'Customer') {
      this.id = 1;
      this.http.get('http://localhost:62772/api/user/userroles?id=' + this.id).subscribe(result => {
        this.data = result;
        this.userList = this.data;
      });
    }
    else if (this.selectOption == 'Driver') {
      this.id = 2;
      this.http.get('http://localhost:62772/api/user/userroles?id=' + this.id).subscribe(result => {
        this.data = result;
        this.userList = this.data;
      });
    }
    else if (this.selectOption == 'Coordinator') {
      this.id = 3;
      this.http.get('http://localhost:62772/api/user/userroles?id=' + this.id).subscribe(result => {
        this.data = result;
        this.userList = this.data;
      });
    }
    else {
      this.id = 4
      this.http.get('http://localhost:62772/api/user/userroles?id=' + this.id).subscribe(result => {
        this.data = result;
        this.userList = this.data;
      });
    }
    //this.http.get('http://localhost:62772/api/user/userroles?id=' + id).subscribe(result => {
    //  this.data = result;
    //  this.userList = this.data;
    //});
  }

}
