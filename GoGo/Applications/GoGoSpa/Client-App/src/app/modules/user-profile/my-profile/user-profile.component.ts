import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfile } from './UserProfile';
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/shared/component/dialog/notification.service';
import { UserProfileService } from '../user-profile.service';

// TODO: Move user-profile to another module, because user profile is not belong to user management or identity management
// Move it to modules/user-profile/my-profile
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  data: any = {};
  baseUrl: string;
  public userProfile = new UserProfile();
  public lStorage = localStorage.length;
  public message: string = null;
  public isError: boolean = false;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    private _notificationService: NotificationService,
    private _userProfileService: UserProfileService
  ) {
  }

  ngOnInit() {

      // TODO: Move all HTTPs request relate to user API into seperated service
      // You need to create UserProfileService in modules/user-profile/user-profile.service.ts
      //
      // then you call _userProfileService.GetMine().subcrible(result=>{
      // })
      //
    // httpOptions, API url... will be managed by API service
    this._userProfileService.viewUserProfileData().subscribe(result => {
        this.data = result;
        this.userProfile = this.data;
      });
    
  }

  update(id) {
    this._router.navigate(['home/profile/edit', id]);
  }

  back() {
    this._location.back();
  }

}
