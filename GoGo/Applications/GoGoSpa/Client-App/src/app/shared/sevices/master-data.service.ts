import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ConfigService } from './config-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService extends BehaviorSubject<any> {
  private baseUrl = '';
  constructor(private http: Http, private configService: ConfigService, private https: HttpClient) {
    super(null);

    this.baseUrl = configService.getApiURI();
  }

  //Master Data
  //Vehicles filter Api
  public vehicleQuery(licensePlate): void {
    this.getVehicleDataSouce(licensePlate).subscribe(x => super.next(x));
  }

  public getVehicleDataSouce(licensePlate): Observable<any> {
    return this.https.get(this.baseUrl + `/Vehicles/dataSource?licensePlate=${licensePlate}`);
  }

  //Vehicles Detail Api
  public getVehicleDetail(Id: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + '/Vehicles/getDetail?Id=' + Id, options);
  }

  //Driver filter Api
  public driverQuery(driverName): void {
    this.getDriverDataSource(driverName).subscribe(x => super.next(x));
  }

  public getDriverDataSource(driverName): Observable<any> {
    return this.https.get(this.baseUrl + `/MasterData/Drivers/dataSource?driverName=${driverName}`);
  }

  //Driver filter Api
  public getDriverDetail(Id: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + '/MasterData/Drivers/getDetail?Id=' + Id, options);
  }

  //Warehouse filter Api
  public werehouseQuery(value): void {
    this.getWarehouseDataSource(value).subscribe(x => super.next(x));
  }

  public getWarehouseDataSource(value): Observable<any> {
    return this.https.get(this.baseUrl + `/MasterData/Warehouses/dataSource?value=${value}`);
  }

  //Warehouse filter Api
  public getWarehouseDetail(Id: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + '/MasterData/Warehouses/getDetail?Id=' + Id, options);
  }


}
