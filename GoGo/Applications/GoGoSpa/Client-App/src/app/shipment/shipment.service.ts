import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/internal/operators/map';
import { BehaviorSubject } from 'rxjs';
import { RequestOptions, Headers, Http} from '@angular/http';
import { ConfigService } from 'src/app/shared/sevices/config-service.service';
import { Observable } from 'rxjs-compat/Observable';
import { SharingService } from '../shared/sevices/sharing-service.service';
import { AuthHttpService } from '../shared';

// TODO: Use AuthHttpService instead of HttpClient, all headers will me managed in AuthHttpService
@Injectable({
  providedIn: 'root'
})
export class ShipmentService extends BehaviorSubject<any>  {
  private url = 'http://localhost:54520/api/shipments';
  // TODO: Remove ConfigService & use ServiceRegistryService instead
  constructor(private configService: ConfigService, private http: AuthHttpService, private auth: SharingService, private https: HttpClient) {
    super(null); 
  }

  CreateShipment(requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId): any {

    let body = JSON.stringify({ requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId });

    return this.http.post('/api/Shipments/', body);
  }

  UpdateShipment(id, code, requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId): any {

    let body = JSON.stringify({id, code, requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId });

    return this.http.put(`/api/Shipments/${id}`, body);
  }


  //Shipment List Api
  public fetch(state: DataSourceRequestState): Observable<GridDataResult> {
    const queryString = `${toDataSourceRequestString(state)}`;
    const hasGroups = state.group && state.group.length;

    return this.http
      .get(`/api/Shipments?${queryString}`).pipe(
        map(response => (<GridDataResult>{
          data: response['data'],
          total: parseInt(response['total'], 10)
        }))
      );
  }

  public GetDetailById(id)
  {
    return this.http.get(`/api/shipments/${id}`);
  }

  public ActivateShipment(id): any {
   
    return this.http.put(`/api/shipments/${id}/activate`, null);
  }

  getListShipmentAssigned(DriverID: number): Observable<any> {
    return this.https.get(`${this.url}/shipmentAssigned?id=${DriverID}`);
  }

  GetLocationPicking(shipmentCode: string): Observable<any> {
    return this.https.get(`${this.url}/${shipmentCode}/locationpicking`);
  }

  GetShipmentDetail(shipmentCode: string): Observable<any> {
    return this.https.get(`${this.url}/${shipmentCode}/deliverydetail`);
  }

  ChangeDeliveryShipmentStatus(shipmentCode: string, status: string): Observable<any> {

    return this.https.put(`${this.url}/${shipmentCode}/changestatus/${status}`, null);
  }

  GetRequest(requestCode: string): Observable<any> {
    return this.https.get(`${this.url}/request/${requestCode}`);
  }

  ChangeStatusRequest(requestCode: string, status: string): Observable<any> {
    return this.https.put(`${this.url}/request/${requestCode}/changestatus/${status}`,null);
  }

  GetListRequest(shipmentCode: string): Observable<any> {
    return this.https.get(`${this.url}/${shipmentCode}/requestList`);
  }
  ChangeOrderReqeust(paramerter: any): Observable<any> {
    return this.https.post(`${this.url}/shipment/changeOrder`, paramerter);
  }
  SendProblem(requestCode: string, problem: boolean, message: string): Observable<any> {
    return this.https.post(`${this.url}/request/${requestCode}/problem/${problem}`, { parameter: { 'message': message }})
  }

}
