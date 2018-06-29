import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {
  userProfileURI: string;
  userProfileInfoBeEdit: string;
  userProfileEdit: string;

  constructor() {
    this.userProfileURI = 'http://localhost:62772/api/user/profile';
    this.userProfileInfoBeEdit = 'http://localhost:62772/api/user/profile/edit?id=';
    this.userProfileEdit = 'http://localhost:62772/api/user/profile/edit?id=';
  }

  getUserProfileURI() {
    return this.userProfileURI;
  }

  getUserProfileInfoBeEditURI() {
    return this.userProfileInfoBeEdit;
  }

  getUserProfileEditURI() {
    return this.userProfileEdit;
  }
}
