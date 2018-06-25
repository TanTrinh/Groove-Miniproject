import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/internal/operators/map';
import { BehaviorSubject } from 'rxjs';
import { RequestOptions, Headers, Http} from '@angular/http';
import { ConfigService } from 'src/app/shared/sevices/config-service.service';
import { Observable } from 'rxjs-compat/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService extends BehaviorSubject<any>  {


  private baseUrl = '';

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

  //Vehicles filter Api
  public query(licensePlate): void {
    this.getdatasource(licensePlate).subscribe(x => super.next(x));
  }

  public getdatasource(licensePlate): Observable<any> {
    return this.https.get(this.baseUrl + `/Vehicles/dataSource?licensePlate=${licensePlate}`);
  }

  //Vehicles Detail Api
  public getVehicleDetail(Id: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + '/Vehicles/getDetail?Id=' + Id, options);
  }
}
