import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../shared/sevices/sharing-service.service';
import { RequestService } from '../../request/request.service';
import { PagerService } from '../../shared/sevices/pager-service.service';
import { Observable } from 'rxjs-compat/Observable';
import { ShipmentService } from '../shipment.service';
import { DataSourceRequestState } from '@progress/kendo-data-query';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Request, Shipment } from '../../shared/models/request'
import { process, State } from '@progress/kendo-data-query';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-shipment-creating',
  templateUrl: './shipment-creating.component.html',
  styleUrls: ['./shipment-creating.component.scss']
})
export class ShipmentCreatingComponent{

  //Combobox
  private toggleText = 'Hide';
  private show = true;
  private view: Observable<any>;
  public request: any = {
  };

  private vehicleView: Observable<any>;
  public vehicle: any = {
  };

  private driverView: Observable<any>;
  public driver: any = {
  };

  //Grid
  private requestDetail: any;
  private vehicleDetail: any = {};
  private driverDetail: any = {};

  public addSucess: boolean;

  public state: DataSourceRequestState = {
  };

  public active: boolean;

  //Table
  public requestList: any[] = new Array();
  public requestIdList: any[] = new Array();
  public gridData: any = process(this.requestList, this.state);

  constructor(private service: ShipmentService, private router: Router, private http: Http, private requestService: RequestService) {
    this.view = requestService;
    this.vehicleView = service;
    this.driverView = service;
  }

  CreateShipment() {
    this.service.CreateShipment(this.requestIdList, '20', "2020-06-26T15:28:00Z", "2020-06-26T15:28:00Z", '2', '2', '3')
      .subscribe()
  }

  //Driver code filter
  public handleDriverFilter(value) {
    this.service.queryData(value)
  }

  //get Driver Detail
  GetDriverDetail() {
    this.service.getDriverDetail(this.driver.Value).pipe(map(res => res.json()))
      .subscribe(result => {
        this.driverDetail = result
      });
  }

  //Vehicles code filter
  public handleVehicleFilter(value) {
    this.service.query(value)
  }

  //get Vehicles Detail
  GetVehicleDetail() {
    this.service.getVehicleDetail(this.vehicle.Value).pipe(map(res => res.json()))
      .subscribe(result => {
        this.vehicleDetail = result
      });
  }


  //Request code filter
  public handleFilter(value) {
    this.requestService.query(value)
  }

  //Add Request Tolist
  AddRequestToList() {
    this.requestService.getRequestDetail(this.request.DisplayName).pipe(map(res => res.json()))
      .subscribe(result => {
        this.requestDetail = result
        this.pushRequest()
      });
  }
  
  pushRequest()
  {
    if (this.requestList.indexOf(this.requestDetail) != -1 || this.requestIdList.indexOf(this.requestDetail.Id) != -1) {
    } else {
      this.requestList.push(this.requestDetail);
      this.requestIdList.push(this.requestDetail.Id);
      this.refreshGrid()
    }
  }

  public refreshGrid() {
    this.gridData = process(this.requestList, this.state)
  }

  public removeHandler({ requestDetail }) {
    var index = this.requestList.indexOf(requestDetail);
    this.requestList.splice(index, 1);
    this.requestIdList.splice(index, 1);
    this.refreshGrid();
  }

 
}
