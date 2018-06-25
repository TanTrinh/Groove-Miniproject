import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  url: string = 'http://localhost:60012/api/Driver';
  constructor(
    private http: HttpClient
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

  getCurrentRequest(requestCode: string): Observable<any> {
    return this.http.get(`${this.url}/shipment/currentRequest?code=${requestCode}`);
  }
  changeStatusRequest(parameter: any): Observable<any> {
    return this.http.post(`${this.url}/changeStatus`, parameter);
  }
}
