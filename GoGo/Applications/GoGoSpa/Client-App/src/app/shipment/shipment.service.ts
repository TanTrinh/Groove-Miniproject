import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/internal/operators/map';
import { BehaviorSubject } from 'rxjs';
import { RequestOptions, Headers, Http} from '@angular/http';
import { ConfigService } from 'src/app/shared/sevices/config-service.service';
import { Observable } from 'rxjs-compat/Observable';

// TODO: Use AuthHttpService instead of HttpClient, all headers will me managed in AuthHttpService
@Injectable({
  providedIn: 'root'
})
export class ShipmentService extends BehaviorSubject<any>  {
  private baseUrl = '';
  private url = 'http://localhost:54520/api/shipments';
  // TODO: Remove ConfigService & use ServiceRegistryService instead
  constructor(private http: Http, private configService: ConfigService, private https: HttpClient) {
    super(null);

    this.baseUrl = configService.getApiURI();
  }

  
  CreateShipment(requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId): any {

    let body = JSON.stringify({ requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId });

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + '/Shipments/Create', body, options);
  }

  UpdateShipment(id, code, requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId): any {

    let body = JSON.stringify({id, code, requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId });

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.baseUrl + '/Shipments/Update', body, options);
  }


  //Shipment List Api
  public fetch(state: DataSourceRequestState): Observable<GridDataResult> {
    const queryStr = `${toDataSourceRequestString(state)}`;
    const hasGroups = state.group && state.group.length;

    return this.https
      .get(`${this.baseUrl}/shipments/datasource?${queryStr}`).pipe(
        map(response => (<GridDataResult>{
          data: response['Data'],
          total: parseInt(response['Total'], 10)
        }))
      );
  }

  public GetDetailByCode(Code)
  {
    let headers = new Headers();

    return this.http.get(this.baseUrl + '/shipments/Detail?Code=' + Code, { headers });
  }

  public ChangeShipmentStatus(Code , value): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.https.put(this.baseUrl + `/shipments/updateStatus?code=${Code}&status=${value}`, Option);
  }
  getListShipmentAssigned(DriverID: number): Observable<any> {
    return this.http.get(`${this.url}/shipmentAssigned?id=${DriverID}`);
  }

  GetLocationPicking(shipmentCode: string): Observable<any> {
    return this.https.get(`${this.url}/${shipmentCode}/locationpicking`);
  }

  GetShipmentDetail(shipmentCode: string): Observable<any> {
    return this.https.get(`${this.url}/${shipmentCode}`);
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
