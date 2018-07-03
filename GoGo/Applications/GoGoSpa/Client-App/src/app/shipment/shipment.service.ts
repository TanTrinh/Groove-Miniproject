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

// TODO: Use AuthHttpService instead of HttpClient, all headers will me managed in AuthHttpService
@Injectable({
  providedIn: 'root'
})
export class ShipmentService extends BehaviorSubject<any>  {
  private baseUrl = '';

  // TODO: Remove ConfigService & use ServiceRegistryService instead
  constructor(private http: Http, private configService: ConfigService, private https: HttpClient, private auth: SharingService) {
    super(null);

    this.baseUrl = configService.getApiURI();
  }

  
  CreateShipment(requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId): any {

    let body = JSON.stringify({ requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId });

    let headers = new Headers();
    headers = this.auth.AddTokenToHeaders();

    return this.http.post(this.baseUrl + '/Shipments/', body, { headers });
  }

  UpdateShipment(id, code, requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId): any {

    let body = JSON.stringify({id, code, requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId });

    let headers = new Headers();
    headers = this.auth.AddTokenToHeaders();
   
    return this.http.put(this.baseUrl + `/Shipments/${id}`, body, { headers });
  }


  //Shipment List Api
  public fetch(state: DataSourceRequestState): Observable<GridDataResult> {
    const queryString = `${toDataSourceRequestString(state)}`;
    const hasGroups = state.group && state.group.length;

    let headers = new HttpHeaders();
    headers = this.auth.AddTokenToHeader();

    return this.https
      .get(`${this.baseUrl}/shipments/list/${queryString}`, { headers }).pipe(
        map(response => (<GridDataResult>{
          data: response['Data'],
          total: parseInt(response['Total'], 10)
        }))
      );
  }

  public GetDetailById(id)
  {
    let headers = new Headers();
    headers = this.auth.AddTokenToHeaders();

    return this.http.get(this.baseUrl + '/shipments/' + id, { headers });
  }

  public ActivateShipment(id): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.https.put(this.baseUrl + `/shipments/${id}/activate`, Option);
  }


}
