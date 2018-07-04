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
  private baseUrl = '';

  // TODO: Remove ConfigService & use ServiceRegistryService instead
  constructor(private configService: ConfigService, private https: AuthHttpService, private auth: SharingService) {
    super(null);

    this.baseUrl = configService.getApiURI();
  }

  CreateShipment(requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId): any {

    let body = JSON.stringify({ requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId });

    return this.https.post('/api/Shipments/', body);
  }

  UpdateShipment(id, code, requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId): any {

    let body = JSON.stringify({id, code, requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId });

    return this.https.put(`/api/Shipments/${id}`, body);
  }


  //Shipment List Api
  public fetch(state: DataSourceRequestState): Observable<GridDataResult> {
    const queryString = `${toDataSourceRequestString(state)}`;
    const hasGroups = state.group && state.group.length;

    return this.https
      .get(`/api/Shipments?${queryString}`).pipe(
        map(response => (<GridDataResult>{
          data: response['data'],
          total: parseInt(response['total'], 10)
        }))
      );
  }

  public GetDetailById(id)
  {
  
    return this.https.get('/api/shipments/' + id);
  }

  public ActivateShipment(id): any {
   
    return this.https.put(`/api/shipments/${id}/activate`, null);
  }


}
