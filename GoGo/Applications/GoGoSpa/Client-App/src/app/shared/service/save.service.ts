import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoRequest } from '../../shipment/shipment-picking/InfoRequest';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  private code: any;
  private currentRequest: string;

  constructor(public http: HttpClient) { }
  public waypts: InfoRequest[]=[];

  saveCode(code: any) {
    this.code = code;
  }
  getCode() {
    return this.code;
  }
  saveCurrentRequest(code: string) {
    this.currentRequest = code;
  }
  getCurrentRequest() {
    return this.currentRequest;
  }


}

