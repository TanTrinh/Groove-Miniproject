import { Injectable } from '@angular/core';
import { ICreateFormService, IViewFormService, IUpdateFormService, IDataSourceService } from '../../shared/component/form';
import { Observable } from 'rxjs';
import { AuthHttpService } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class RequestService implements ICreateFormService, IViewFormService, IUpdateFormService, IDataSourceService {
  
  getDataSource(): Observable<any> { // warehouseList
    return this._apiHttp.get(`/api/warehouse/customer/77`); //get id from claim
  }
  edit(id: any, formData: any): Observable<any> {
    return this._apiHttp.put(`/api/request/${id}`, formData);
  }

  getFormData(id: any): Observable<any> { // for view
    return this._apiHttp.get(`/api/request/${id}`);
  }

  create(formData: any): Observable<any> {
    console.log(formData);
    return this._apiHttp.post(`/api/request`, formData);
  }

  getViewFormUrl(id: any): string {
    return `/request/form/view/${id}`;
  }

  getListPageUrl(): string {
    return `/request/list`;
  }

  constructor(private _apiHttp: AuthHttpService) {

  }
}
