import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  private code: any;
  private statusShipment: string;
  constructor(public http:HttpClient) { }

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

  getShipmentDetail(shipmentId: number): Observable<any> {
    return this.http.get(`http://localhost:60012/api/Driver/shipment/${shipmentId}`);
  }
}

