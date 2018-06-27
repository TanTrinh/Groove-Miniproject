import { Injectable } from '@angular/core';
import { ICreateFormService, IViewFormService, IUpdateFormService, IDataSourceService } from '../../shared/component/form';
import { Observable, observable } from 'rxjs';
import { AuthHttpService } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class RequestService implements ICreateFormService, IViewFormService, IUpdateFormService, IDataSourceService {
  
  getDataSource(): Observable<any> { // warehouseList
    //var data: any = {};
    //data.WarehouseList = this._apiHttp.get(`/api/warehouse/customer/77`);
    //data.VehicleFeatureList = this._apiHttp.get(`/api/vehicle-feature/datasource`);
    //return data; //get id from claim
    return this._apiHttp.get(`/api/warehouse/customer/77`);
  }

  filterWarehouseList(displayName: string): Observable<any>{
    console.log("qwe");
    return this._apiHttp.get(`/api/warehouse/filter-list/${displayName}`);
  }

  edit(id: any, formData: any): Observable<any> {
    return this._apiHttp.put(`/api/request/${id}`, formData);
  }

  getFormData(id: any): Observable<any> { // for view
    return this._apiHttp.get(`/api/request/${id}`);
  }

  create(formData: any): Observable<any> {
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
