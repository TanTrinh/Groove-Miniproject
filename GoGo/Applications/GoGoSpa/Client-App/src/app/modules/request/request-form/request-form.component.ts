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
  formData: any = {
    wareHouse: '',
  }

  public onBeforeInitFormData(data) {

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
    this.formConfiguration.events.onAfterInitFormData = (data)=> {
      this.onBeforeInitFormData(data);
    };

    super.formOnInit("Request", {});
  }
  ngOnInit() {
  }

  public GetRequestStatus() {
  }

  public filterChange(value) {
    if (value != null && value != undefined && value != '') {
      this.requestService.filterWarehouseList(value).subscribe(data => {
        if (data != null && data != undefined) {
          this.warehouseList = data;
        }
      });
      
    }
  }


}
