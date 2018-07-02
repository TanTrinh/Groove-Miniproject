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
  private BASE_URL: string = 'http://localhost:54520/api/Requests/RequestList';

  baseUrl: string = '';

  constructor(private http: Http, private configService: ConfigService, private https: HttpClient) {
    super(null);

    this.baseUrl = configService.getApiURI();
  }


  //Request List Api
  public fetch(state: DataSourceRequestState): Observable<GridDataResult> {
    const queryStr = `${toDataSourceRequestString(state)}`; 
    const hasGroups = state.group && state.group.length;

    return this.https
      .get(`${this.BASE_URL}?${queryStr}`).pipe(
        map(response => (<GridDataResult>{
          data: response['Data'],
          total: parseInt(response['Total'], 10)
        }))
      );
  }

  //Request filter Api
  public query(value, werehouseId): void {
    this.getdatasource(value, werehouseId).subscribe(x => super.next(x));
  }

  public getdatasource(value, werehouseId): Observable<any> {
    return this.https.get(this.baseUrl + `/Requests/dataSource?value=${value}&warehouseId=${werehouseId}`);
  }

  //Request Detail Api
  public getRequestDetail(code: string): Observable<any>
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + '/Requests/getDetail?code=' + code, options);
  }



}
