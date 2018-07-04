import { Component, OnInit } from '@angular/core';
import { FormBaseComponent, FormValidationService } from '../../../shared/component/form';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../shared/component/dialog/notification.service';
import { RequestService } from '../request.service';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})

export class RequestFormComponent extends FormBaseComponent implements OnInit {
  public warehouseList: Array<any> = []; 
  public vehicleFeatureList: Array<any> = [];
  public requestStatus: string = '';

  public onLoadGrid(status) {
    if (status == 'Inactive') {
      return 'Activate';
    }
    else if (status == 'Pending') {
      return 'Deactivate'
    }
  }

  public onClickStatus(dataItem) {
    if (dataItem.status == 'Inactive') {
      this.requestService.changeStatus(dataItem.code, 'Pending').subscribe(
        result => {
          dataItem.status = result.result;
        }
      );
    }
    else if (dataItem.status == 'Pending') {
      this.requestService.changeStatus(dataItem.code, 'Inactive').subscribe(
        result => {
          dataItem.status = result.result;
        });
    }
  }

  public resetData(data) {
    this.formData.wareHouse = '';
    this.formData.vehicleFeature = '';
    this.requestStatus = '';
  }

  public onBeforeInitFormData(data) {
    // Get status
    this.requestStatus = this.GetRequestStatus(data.id);
    // Date parse
    if (data.pickingDate == null || data.pickingDate == undefined || data.expectedDate == null || data.expectedDate == undefined) {
      data.pickingDate = new Date();
      data.expectedDate = new Date();
    }
    else {
      data.pickingDate = new Date(data.pickingDate);
      data.expectedDate = new Date(data.expectedDate);
    }

    // Push warehouse to warehouse list so that it can show in combobox
    this.warehouseList.push(data.wareHouse);
  }

  constructor(protected route: ActivatedRoute,
    protected router: Router,
    protected requestService: RequestService,
    protected notificationService: NotificationService,
    protected validationService: FormValidationService,
    private _notificationService: NotificationService,
  ) {
    super(route, router, notificationService, requestService, validationService);
    this.resetFormData = (data) => { this.resetData(data) };
    this.formConfiguration.events.onAfterInitFormData = (data)=> {
      this.onBeforeInitFormData(data);
    };

    super.formOnInit("Request", {});
  }

  public GetRequestStatus(requestId: any) {
    if (requestId != null && requestId != undefined) {
      this.requestService.GetRequestStatus(requestId).subscribe(data => {
        if (data != null && data != undefined) {
          this.requestStatus = data.result;
          if (this.requestStatus == null || this.requestStatus == undefined) {
            this.requestStatus = 'not accepted';
          }
        }
      });
    }
    return this.requestStatus;
  }

  public filterWarehouse(value) {
    if (value != null && value != undefined && value != '') {
      this.requestService.filterWarehouse(value).subscribe(data => {
        if (data != null && data != undefined) {
          this.warehouseList = data;
        }
      });
      
    }
  }

  public filterVehicleFeature(value) {
    if (value != null && value != undefined && value != '') {
      this.requestService.filterVehicleFeature(value).subscribe(data => {
        if (data != null && data != undefined) {
          this.vehicleFeatureList = data;
        }
      });

    }
  }

  ngOnInit() {
  }

}
