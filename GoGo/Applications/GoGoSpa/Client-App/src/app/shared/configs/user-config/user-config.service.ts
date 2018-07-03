import { Injectable } from '@angular/core';

// TODO: Remove this service,
// API host address (http://localhost:62772/) was managed in ServiceRegistryService, you do not need to create another service
@Injectable({
  providedIn: 'root'
})
export class UserConfigService {
  userProfileURI: string;
  userProfileInfoBeEdit: string;
  userProfileEdit: string;

  constructor() {
    this.userProfileURI = 'http://localhost:54520/api/user/profile';
    this.userProfileInfoBeEdit = 'http://localhost:54520/api/user/profile/edit?id=';
    this.userProfileEdit = 'http://localhost:54520/api/user/profile/edit?id=';
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
