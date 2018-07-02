import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  toDataSourceRequestString,
  translateDataSourceResultGroups,
  translateAggregateResults,
  DataResult,
  DataSourceRequestState
} from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public lStorage = localStorage.length;

  private BASE_URL = 'http://localhost:62772/api/user/list';

  constructor(private http: HttpClient) { }

  public fetch(state: DataSourceRequestState): Observable<DataResult> {
    var key = localStorage.getItem('tokenKey');
    var currentKey = JSON.parse(key);
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentKey.access_token
      })
    }
    const queryStr = `${toDataSourceRequestString(state)}`; // Serialize the state
    const hasGroups = state.group && state.group.length;

    return this.http
      .get(`${this.BASE_URL}?${queryStr}`, httpOptions) // Send the state to the server
      .map(({ data, total/*, aggregateResults*/ }: GridDataResult) => // Process the response
        (<GridDataResult>{
          // If there are groups, convert them to a compatible format
          data: hasGroups ? translateDataSourceResultGroups(data) : data,
          total: total,
          // Convert the aggregates if such exist
          //aggregateResult: translateAggregateResults(aggregateResults)
        })
      )
  }
}
