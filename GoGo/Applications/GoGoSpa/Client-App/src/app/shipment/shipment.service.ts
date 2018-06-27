import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  url: string = 'http://localhost:60012/api/Driver';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getListShipmentAssigned(DriverID: number): Observable<any> {
    return this.http.get(`${this.url}/shipmentAssigned?id=${DriverID}`);
  }

  getLocationPicking(shipmentCode: string): Observable<any> {
    return this.http.get(`${this.url}/getLocationPicking?code=${shipmentCode}`);
  }

  getShipmentDetail(shipmentCode: string): Observable<any> {
    return this.http.get(`${this.url}/shipmentDetail?code=${shipmentCode}`);
  }

  changeStatusShipment(parameter: any): Observable<any> {
    return this.http.post(`${this.url}/shipmentFeedback`, parameter);
  }

  getRequest(requestCode: string): Observable<any> {
    return this.http.get(`${this.url}/shipment/request?code=${requestCode}`);
  }
  changeStatusRequest(parameter: any): Observable<any> {
    return this.http.post(`${this.url}/changeStatus`, parameter);
  }
  getListRequest(shipmentCode: string): Observable<any> {
    return this.http.get(`${this.url}/shipment/requestList?code=${shipmentCode}`);
  }
  changeOrderReqeust(paramerter: any): Observable<any> {
    return this.http.post(`${this.url}/shipment/changeOrder`, paramerter);
  }
}
