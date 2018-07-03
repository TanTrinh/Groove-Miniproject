import { Injectable } from '@angular/core';

export class ConfigService {

  _apiURI: string;

  constructor() {
    this._apiURI = 'http://localhost:54520/api';
  }

  getApiURI() {
    return this._apiURI;
  }
}
