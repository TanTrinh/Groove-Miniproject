import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharingService } from '../../shared/sevices/sharing-service.service';
import { RequestService } from '../../request/request.service';
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
import { MasterDataService } from '../../shared/sevices/master-data.service';
import { Subscription } from 'rxjs-compat/Subscription';


@Component({
  selector: 'app-shipment-creating',
  templateUrl: './shipment-creating.component.html',
  styleUrls: ['./shipment-creating.component.scss']
})
export class ShipmentCreatingComponent implements OnInit, OnDestroy {

  

  private sub: Subscription;

  public shipmentCode: any;
  public shipmentId: any;
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

  private warehouseView: Observable<any>;
  public warehouse: any = {
  };

  private pickingDate = new Date();
  private deliveryDate = new Date();

  //Grid
  private requestDetail: any;
  private vehicleDetail: any = {};
  private driverDetail: any = {};
  private warehouseDetail: any = {};
  private isValid: boolean;

  public addSucess: boolean;

  public state: DataSourceRequestState = {
  };

  public active: boolean;
  public errors: "";
  //Grid
  public requestList: any[] = new Array();
  public requestIdList: any[] = new Array();
  public gridData: any = process(this.requestList, this.state);

  constructor(private shipmentService: ShipmentService, private router: Router, private http: Http,
              private requestService: RequestService, private masterDataService: MasterDataService,
              private sharingService: SharingService) {
    this.view = requestService;
    this.vehicleView = masterDataService;
    this.driverView = masterDataService;
    this.warehouseView = masterDataService;
  }

  ngOnInit(): void {
    if (this.sharingService.isNewShipment == false) {
      this.shipmentService.GetDetailByCode(this.sharingService.shipmentCode).pipe(map(res => res.json())).subscribe
        (
        result => {
          this.shipmentId = result.Id
          this.shipmentCode = result.Code
          this.driverDetail = result.Driver
          this.vehicleDetail = result.Vehicle
          this.requestIdList = result.RequestIdList
          this.requestList = result.RequestList
          this.pickingDate = new Date(result.EndDate)
          this.deliveryDate = new Date(result.EndDate)
          this.refreshGrid()
          console.log(this.sharingService.shipmentCode)
        }
        )
    }
    
  }

  ngOnDestroy(): void {
   
  }

  onSave() {
    if (this.requestIdList.length != 0) {
      {
        if (this.sharingService.isNewShipment == true) {
          this.shipmentService.CreateShipment(this.requestIdList, this.requestIdList.length, this.pickingDate, this.deliveryDate, this.vehicleDetail.Id, this.driverDetail.Id, '3')
            .subscribe(result => {

              this.router.navigate(['/shipment/']);
            },
              errors => { this.errors = errors })
        }
        else if (this.sharingService.isNewShipment == false) {
          this.shipmentService.UpdateShipment(this.shipmentId, this.sharingService.shipmentCode, this.requestIdList, this.requestIdList.length, this.pickingDate, this.deliveryDate, this.vehicleDetail.Id, this.driverDetail.Id, '3')
            .subscribe(result => {

              this.router.navigate(['/shipment/']);
            },
              errors => { this.errors = errors })
        }
      }
    }
  }

  onCancel()
  {
    this.router.navigate(['/shipment/']);
  }


  //Master Data
  //Driver code filter
  public handleDriverFilter(value) {
    this.masterDataService.driverQuery(value)
  }

  //get Driver Detail
  GetDriverDetail() {
    this.masterDataService.getDriverDetail(this.driver.Value).pipe(map(res => res.json()))
      .subscribe(result => {
        this.driverDetail = result
      });
  }

  //Vehicles code filter
  public handleVehicleFilter(value) {
    this.masterDataService.vehicleQuery(value)
  }

  //get Vehicles Detail
  GetVehicleDetail() {
    this.masterDataService.getVehicleDetail(this.vehicle.Value).pipe(map(res => res.json()))
      .subscribe(result => {
        this.vehicleDetail = result
      });
  }

  //Warehouse code filter
  public handleWarehouseFilter(value) {
    this.masterDataService.werehouseQuery(value)
  }

  //get Warehouse Detail
  GetWarehouseDetail() {
    this.masterDataService.getWarehouseDetail(this.warehouse.Value).pipe(map(res => res.json()))
      .subscribe(result => {
        this.warehouseDetail = result
      });
  }

  //Request code filter
  public handleFilter(value) {
    this.requestService.query(value, this.warehouseDetail.Id)
  }

  //Add Request Tolist
  AddRequestToList() {
    this.requestService.getRequestDetail(this.request.DisplayName).pipe(map(res => res.json()))
      .subscribe(result => {
        this.requestDetail = result
        this.requestDetail.PickingDate = this.sharingService.datimeFormat(this.requestDetail.PickingDate);
        this.requestDetail.ExpectedDate = this.sharingService.datimeFormat(this.requestDetail.ExpectedDate);
        this.pushRequest()
      });
  }

  //Grid table
  pushRequest()
  {
    if (this.requestList.indexOf(this.requestDetail) != -1
      || this.requestIdList.indexOf(this.requestDetail.Id) != -1) {
    } else {
      this.requestList.push(this.requestDetail);
      this.requestIdList.push(this.requestDetail.Id);
      this.refreshGrid();
      this.isValid = true;
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

    if (this.requestIdList.length == 0)
      this.isValid = false
  }


}
