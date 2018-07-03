import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { UserDetail } from './UserDetail';
import { AdminConfigService } from '../../../../shared/configs/admin-config/admin-config.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: string;
  data: any = {};
  baseUrl: string;
  public userDetail = new UserDetail();
  public lStorage = localStorage.length;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute,
    private _configService: AdminConfigService,
    private _userService: UserService
  ) {
    this.baseUrl = _configService.getUserDetailURI();
  }

  ngOnInit() {
    //var key = localStorage.getItem('tokenKey');
    //var currentKey = JSON.parse(key);

    //if (this.lStorage != 0) {
    //  var httpOptions = {
    //    headers: new HttpHeaders({
    //      'Content-Type': 'application/json',
    //      'Authorization': 'Bearer ' + currentKey.access_token
    //    })
    //  };

    //  this.id = this._route.snapshot.paramMap.get('id');

    //  // TODO: Move all HTTPs request relate to user API into seperated service
    //  // You need to create UserService in ../../identity/user/user.service.ts
    //  //
    //  // then you call _userService.Get(this.id).subcrible(result=>{
    //  // })
    //  //
    //  // httpOptions, API url... will be managed by API service
    //  this._http.get(this.baseUrl + this.id, httpOptions).subscribe(result => {
    //    console.log(result);
    //    this.data = result;
    //    this.userDetail = this.data;
    //  });
    //}
    this.id = this._route.snapshot.paramMap.get('id');
    this._userService.getFormData(this.id).subscribe(result => {
      this.data = result;
      this.userDetail = this.data;
    });
  }

  pageBack() {
    this._router.navigate(['account']);
  }

}
