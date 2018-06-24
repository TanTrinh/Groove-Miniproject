import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../shared/sevices/sharing-service.service';
import { RequestService } from '../../request/request-service.service';
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


@Component({
  selector: 'app-shipment-creating',
  templateUrl: './shipment-creating.component.html',
  styleUrls: ['./shipment-creating.component.scss']
})
export class ShipmentCreatingComponent{
  private toggleText = 'Hide';

  private show = true;

  private view: Observable<any>;

  public request: any;

  public requestTemp: any;

  public addSucess: boolean;

  //@ViewChild(TooltipDirective)
  //public tooltipDir: TooltipDirective;

  public state: DataSourceRequestState = {
    skip: 0,
    take: 5
  };

  public active: boolean;

  //Table
  public requestList: any[] = new Array();
  public requestIdList: any[] = new Array();

  public gridData: any = process(this.requestList, this.state);

  constructor(private service: ShipmentService, private router: Router, private http: Http) {
      this.view = service;
  }

  public handleFilter(state: DataStateChangeEvent) {
    this.state = state;
    this.service.query(state);
    this.addSucess = false;
  }

  pushRequest()
  {
    if (this.requestList.indexOf(this.request) != -1 || this.requestIdList.indexOf(this.request.Id) != -1) {
      this.addSucess = false;
    } else {
      this.requestList.push(this.request);
      this.requestIdList.push(this.request.Id);
      this.refreshGrid()
    }
    this.addSucess = true;
  }

  public refreshGrid() {
    this.gridData = process(this.requestList, this.state)
  }

  public addHandler() {
    this.request = new Request();
    this.active = true;
    this.refreshGrid();
  }

  public action(status) {

    if (status == 'no') {
      this.active = false;
    } else {
      this.pushRequest();
    }
  }

  public removeHandler({ request }) {
    var index = this.requestList.indexOf(request);
    this.requestList.splice(index, 1);
    this.requestIdList.splice(index, 1);
    this.refreshGrid();
  }
  register(requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId): any {

    let body = JSON.stringify({ requestIdList, requestQuantity, startDate, endDate, vehicleId, driverId, coordinatorId });

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post("http://localhost:54520/api/Shipments/Create", body, options);
  }
  
  public errors: string;

  CreateShipment() {
    this.errors = '';

    
      this.register(this.requestIdList,'20', "2018-06-26T15:28:00Z","2018-06-26T15:28:00Z", '2', '2','3')
        .subscribe()
   
  }  
}
