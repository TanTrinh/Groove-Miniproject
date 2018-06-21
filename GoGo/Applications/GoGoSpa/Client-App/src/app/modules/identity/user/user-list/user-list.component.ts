import { Component, OnInit } from '@angular/core';
import { UserList } from './UserList';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParamsOptions, HttpParams } from '@angular/common/http/src/params';
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
 


  constructor(private http: HttpClient, private router: Router) { }

  paginators = [];
  ngOnInit() {
    this.http.get('http://localhost:62772/api/user/account').subscribe(result => {
      this.data = result;
      this.userList = this.data;
    });
  }

}
