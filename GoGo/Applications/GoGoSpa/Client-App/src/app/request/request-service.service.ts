import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from '../shared/sevices/config-service.service';
import { DataSourceRequestState, toDataSourceRequestString, DataResult, translateDataSourceResultGroups } from '@progress/kendo-data-query';
import { Observable } from 'rxjs-compat/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private BASE_URL: string = 'http://localhost:54520/api/Requests/RequestList';
  baseUrl: string = '';
  constructor(private https: Http, private configService: ConfigService, private http: HttpClient) {
    this.baseUrl = configService.getApiURI();
  }

  public fetch(state: DataSourceRequestState): Observable<GridDataResult> {
    const queryStr = `${toDataSourceRequestString(state)}`; 
    const hasGroups = state.group && state.group.length;

    return this.http
      .get(`${this.BASE_URL}?${queryStr}`).pipe(
        map(response => (<GridDataResult>{
          data: response['Data'],
          total: parseInt(response['Total'], 10)
        }))
      );
  }
}
