import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/shared/component/dialog/notification.service';
import { AdminConfigService } from '../../../../shared/configs/admin-config/admin-config.service';
import { UserService } from '../user.service';

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
  baseUrlEdit: string;
  baseUrlInfoBeEdit: string;
  public message: string = null;
  public isError: boolean = false;
  public lStorage = localStorage.length;

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private location: Location,
    private _notificationService: NotificationService,
    private _configService: AdminConfigService,
    private _userService: UserService
  ) {
    this.baseUrlInfoBeEdit = _configService.getUerInfoBeEditURI();
    this.baseUrlEdit = _configService.getEditUserURI()
  }

  ngOnInit() {
    // TODO: Move all HTTPs request relate to user API into seperated service
    // You need to create UserService in ../../identity/user/user.service.ts
    //
    // then you call _userService.Get(this.id).subcrible(result=>{
    // })
    //
    // httpOptions, API url... will be managed by API service
    this.id = this._route.snapshot.paramMap.get('id');
    this._userService.getFormData(this.id).subscribe(result => {
      this.model = result;
    });
  }

  save(id) {
    // TODO: Move all HTTPs request relate to user API into seperated service
    // You need to create UserService in ../../identity/user/user.service.ts
    //
    // then you call _userService.Update(this.id, this.model).subcrible(result=>{
    // })
    //
    // httpOptions, API url... will be managed by API service
    this._userService.edit(id, this.model).subscribe(result => {
      if (result) {
        this.data = result;
        this.router.navigate(['account/detail', this.data.value]);
      }
    }, error => {
      this.isError = true;

      let httpError: HttpErrorResponse = error;
      if (httpError.status === 400) {

        this.message = httpError.error.message;
      } else {
        this._notificationService.prompError(httpError.message);
      }
    });
  }

  back() {
    this.router.navigate(['account']);
  }
}
