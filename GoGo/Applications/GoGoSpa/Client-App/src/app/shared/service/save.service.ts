import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  private code: any;
  private statusShipment: string;
  constructor() { }

  saveCode(code: any) {
    this.code = code;
  }
  getCode() {
    return this.code;
  }
  saveStatus(status: string) {
    this.statusShipment = status;
  }
  getStatusShipment() {
    return this.statusShipment;
  }
}
