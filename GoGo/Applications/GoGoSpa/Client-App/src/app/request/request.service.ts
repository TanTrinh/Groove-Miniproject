import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from '../shared/sevices/config-service.service';
import { DataSourceRequestState, toDataSourceRequestString, DataResult, translateDataSourceResultGroups } from '@progress/kendo-data-query';
import { Observable } from 'rxjs-compat/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService extends BehaviorSubject<any> {

  baseUrl: string = '';

  constructor(private http: Http, private configService: ConfigService, private https: HttpClient) {
    super(null);

    this.baseUrl = configService.getApiURI();
  }

  //Request filter Api
  public query(value, werehouseId): void {
    this.getdatasource(value, werehouseId).subscribe(x => super.next(x));
  }

  public getdatasource(value, werehouseId): Observable<any> {
    return this.https.get(this.baseUrl + `/Requests/filter/${werehouseId}/${value}`);
  }

  //Request Detail Api
  public getRequestDetail(id: any): Observable<any>
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + `/Requests/${id}`, options);
  }



}
