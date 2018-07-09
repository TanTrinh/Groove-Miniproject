import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharingService } from '../../shared/sevices/sharing-service.service';
import { RequestsService } from '../../request/request.service';
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
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { switchMap } from 'rxjs/operators';
import { MasterDataService } from '../../shared/sevices/master-data.service';
import { Subscription } from 'rxjs-compat/Subscription';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-shipment-creating',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.scss']
})
export class ShipmentFormComponent implements OnInit, OnDestroy {

  private formMode: string;
  private isCreateForm: boolean;


  private sub: Subscription;

  public shipmentCode: any;
  public shipmentId: any;
  //Combobox
  private toggleText = 'Hide';
  private show = true;
  private requestView: Observable<any>;
  public request: any = {
  };

  private vehicleView: any;
  public vehicle: any = {
  };

  private driverView: any;
  public driver: any = {
  };

  private warehouseView: any;
  public warehouse: any = {};


  private pickingDate = new Date();
  private deliveryDate = new Date();

  //Grid
  private requestDetail: any;
  private vehicleDetail: any = {};
  private driverDetail: any = {};
  private warehouseDetail: any = {};
  private isValid: boolean;
  private isNewShipment: boolean;
  public addSucess: boolean;

  public state: DataSourceRequestState = {
    skip: 0,
    take: 5
  };

  public states: DataSourceRequestState = {
    skip: 0,
    take: 5
  };

  public active: boolean;
  public errors: "";
  //Grid
  public requestList: any[] = new Array();
  public gridData: any = process(this.requestList, this.state);


  public gridShipmentRequestData: any = process(this.requestList, this.state);
  public shipmentRequestList: any[] = new Array();
  public requestIdList: any[] = new Array();

  constructor(private shipmentService: ShipmentService, private router: Router, private http: Http,
    private requestService: RequestsService, private masterDataService: MasterDataService,
    private sharingService: SharingService, private route: ActivatedRoute) {

    // TODO: If vehicleView & driverView should not share the same masterDataService, because they will share the same data
    // Solution: replace vehicleView by vehicleList, when use call handleVehicleFilter(),
    // it will call HTTP to get new data, then new data will be replace current vehicleList
    // Done

    this.shipmentId = this.route.snapshot.paramMap.get('id');
    this.formMode = this.route.snapshot.paramMap.get('mode');
    (this.formMode == 'update') ? this.isCreateForm = false : this.isCreateForm = true;
    this.gridData = process(this.requestList, this.state);
  }

  ngOnInit(): void {
    if (this.formMode == "update") {
      this.shipmentService.GetDetailById(this.shipmentId).subscribe(
        result => {
          this.shipmentId = result.id
          this.shipmentCode = result.code
          this.driverDetail = result.driver
          this.vehicleDetail = result.vehicle
          this.requestIdList = result.requestIdList


          this.shipmentRequestList = result.requestList
          this.warehouseDetail = result.warehouse

          this.pickingDate = new Date(result.startDate)
          this.deliveryDate = new Date(result.endDate)

          this.isValid = true;

          this.getAllRequestByWarehouseId(this.warehouseDetail.id)
          
          this.refreshShipmentRequestGrid()
        }
      )
      this.isValid = true;
    }

  }

  ngOnDestroy(): void {

  }

  onSave() {
    if (this.requestIdList.length != 0) {
      {
        if (this.isCreateForm == true) {
          this.shipmentService.CreateShipment(this.requestIdList, this.requestIdList.length, this.pickingDate, this.deliveryDate, this.vehicleDetail.id, this.driverDetail.id, '3')
            .subscribe(result => {

              this.router.navigate(['/shipment/']);
            },
            errors => { this.errors = errors })
        }
        else if (this.isCreateForm == false) {
          this.shipmentService.UpdateShipment(this.shipmentId, this.shipmentCode, this.requestIdList, this.requestIdList.length, this.pickingDate, this.deliveryDate, this.vehicleDetail.id, this.driverDetail.id, '3')
            .subscribe(result => {

              this.router.navigate(['/shipment/']);
            },
            errors => { this.errors = errors })
        }
      }
    }
  }

  onCancel() {
    this.router.navigate(['/shipment/']);
  }


  //Master Data
  //Driver code filter
  public handleDriverFilter(value) {
    if (value != null && value != undefined && value != '') {
      this.masterDataService.getDriverDataSource(value).subscribe(result => {
        this.driverView = result;
      })
    }
  }

  //get Driver Detail
  GetDriverDetail() {
    if (this.driver != undefined) {
      this.masterDataService.getDriverDetail(this.driver.value)
        .subscribe(result => {
          this.driverDetail = result
        });
    }

  }

  //Vehicles code filter
  public handleVehicleFilter(value) {
    if (value != null && value != undefined && value != '') {
      this.masterDataService.getVehicleDataSouce(value).subscribe(result => {
        this.vehicleView = result;
      })
    }

  }

  //get Vehicles Detail
  GetVehicleDetail() {
    if (this.vehicle != undefined) {
      this.masterDataService.getVehicleDetail(this.vehicle.value)
        .subscribe(result => {
          this.vehicleDetail = result
        });
    }


  }

  //Warehouse code filter
  public handleWarehouseFilter(value) {
    if (value != null && value != undefined && value != '') {
      this.masterDataService.getWarehouseDataSource(value).subscribe(result => {
        this.warehouseView = result;
      })
    }
  }

  //get Warehouse Detail
  GetWarehouseDetail() {
    if (this.warehouse != undefined) {
      this.masterDataService.getWarehouseDetail(this.warehouse.value)
        .subscribe(result => {
          this.warehouseDetail = result
          this.getAllRequestByWarehouseId(this.warehouse.value)
        });
    }
  }

  getAllRequestByWarehouseId(warehouseId) {
    this.requestService.getAllRequestByWarehouseId(warehouseId).subscribe(result => {
      this.requestList = result;
      this.refreshGrid();
    })
  }

  //Request code filter
  public handleFilter(value) {
    if (value != null && value != undefined && value != '') {
      this.requestService.getdatasource(value, this.warehouseDetail.id).subscribe(result => {
        this.requestView = result;
      })
    }
  }

  //Add Request Tolist
  AddRequestToList() {
    if (this.request != undefined) {
      this.requestService.getRequestDetail(this.request.value)
        .subscribe(result => {
          this.requestDetail = result
        });
    }

  }

  AddRequestHandle(dataItem) {
    this.shipmentRequestList.push(dataItem)
    this.refreshShipmentRequestGrid();

    var index = this.requestList.indexOf(dataItem);
    this.requestList.splice(index, 1);
    this.requestIdList.push(dataItem.id);
    this.refreshGrid();
    this.refreshShipmentRequestGrid();

    this.isValid = true;

    console.log(this.requestIdList)
  }

  removeHandler(dataItem)
  {  
      var index = this.shipmentRequestList.indexOf(dataItem);
      this.shipmentRequestList.splice(index, 1);
      this.requestIdList.splice(index, 1);

      this.requestList.push(dataItem);
      this.refreshGrid();
      this.refreshShipmentRequestGrid();

    if (this.shipmentRequestList.length == 0) {
      this.isValid = false;
    }
  
    console.log(this.requestIdList)
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.refreshGrid();
  }

  public dataStateChanges(state: DataStateChangeEvent): void {
    this.states = state;
    this.refreshShipmentRequestGrid();
  }

  public refreshGrid() {
    this.gridData = process(this.requestList, this.state)
  }

  public refreshShipmentRequestGrid() {
    this.gridShipmentRequestData = process(this.shipmentRequestList, this.state)
  }


  //public removeHandler({ requestDetail }) {
  //  var index = this.requestList.indexOf(requestDetail);
  //  this.requestList.splice(index, 1);
  //  this.requestIdList.splice(index, 1);
  //  this.refreshGrid();

  //  if (this.requestIdList.length == 0)
  //    this.isValid = false
  //}

    ////Grid table
  //pushRequest() {
  //  if (this.requestList.indexOf(this.requestDetail) != -1
  //    || this.requestIdList.indexOf(this.requestDetail.id) != -1) {
  //  } else {
  //    this.requestList.push(this.requestDetail);
  //    this.requestIdList.push(this.requestDetail.id);
  //    this.refreshGrid();
  //    this.isValid = true;
  //  }
  //}
}
