import { Injectable } from '@angular/core';

// TODO: Remove this service,
// API host address (http://localhost:62772/) was managed in ServiceRegistryService, you do not need to create another service
@Injectable({
  providedIn: 'root'
})
export class AdminConfigService {
  createUserURI: string;
  userDetailURI: string;
  editUserURI: string;
  userInfoBeEdit: string;

  constructor() {
    this.createUserURI = 'http://localhost:54520/api/user/create';
    this.userDetailURI = 'http://localhost:54520/api/user/detail?id=';
    this.userInfoBeEdit = 'http://localhost:54520/api/user/edit?id=';
    this.editUserURI = 'http://localhost:54520/api/user/edit?id=';
  }

  getCreateUserURI() {
    return this.createUserURI;
  }

  getUserDetailURI() {
    return this.userDetailURI;
  }

  getUerInfoBeEditURI() {
    return this.userInfoBeEdit;
  }

  getEditUserURI() {
    return this.editUserURI;
  }
}
