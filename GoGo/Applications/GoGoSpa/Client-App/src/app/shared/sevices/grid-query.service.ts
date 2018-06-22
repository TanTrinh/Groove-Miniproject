import { Injectable } from '@angular/core';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs-compat/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';

import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { BehaviorSubject } from 'rxjs-compat/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridQueryService extends BehaviorSubject<GridDataResult>  {
  public loading: boolean;

  private BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/';

  constructor(
    private http: HttpClient,
    protected tableName: string
  ) {
    super(null);
  }

  public query(state: any): void {
    this.fetch(this.tableName, state)
      .subscribe(x => super.next(x));
  }

  protected fetch(tableName: string, state: any): Observable<GridDataResult> {
    const queryStr = `${toODataString(state)}&$count=true`;
    this.loading = true;

    return this.http
      .get(`${this.BASE_URL}${tableName}?${queryStr}`)
      .pipe(
        map(response => (<GridDataResult>{
          data: response['value'],
          total: parseInt(response['@odata.count'], 10)
        })),
        tap(() => this.loading = false)
      );
  }
}
