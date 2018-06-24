import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs-compat/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/internal/operators/map';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService extends BehaviorSubject<any>  {

  public fetch(state: DataSourceRequestState): any {
    const queryStr = `${toDataSourceRequestString(state)}`;
    return this.http
      .get(`${this.BASE_URL}?${queryStr}`).pipe(map(response => response['Data']));
  }


  private BASE_URL = 'http://localhost:54520/api/Requests/RequestList';
 
  constructor(private http: HttpClient) {
    super(null);
  }

  public query(state: DataSourceRequestState): void {
    this.fetch(state)
      .subscribe(x => super.next(x));
  }

}
