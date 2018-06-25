import { Component, OnInit } from '@angular/core';
import { FormBaseComponent, FormValidationService } from '../../../shared/component/form';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../shared/component/dialog/notification.service';
import { RequestService } from '../request.service';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})

export class RequestFormComponent extends FormBaseComponent implements OnInit {

  public onAfterGetData(res, formData) {
    for (var i = 0; i < res.length; i++) {
      if (res[i].id = formData.wareHouseId) {
        var temp = res[i].nameWarehouse;
      }
    }
    return temp;
  }
  constructor(protected route: ActivatedRoute,
    protected router: Router,
    protected requestService: RequestService,
    protected notificationService: NotificationService,
    protected validationService: FormValidationService,
    private _notificationService: NotificationService,
  ) {
    super(route, router, notificationService, requestService, validationService);
    this.formConfiguration.dataSourceMapper.add('WarehouseList', requestService);
    this.formConfiguration.dataSourceMapper.add('CurrentWarehouse', requestService, this.onAfterGetData);
    super.formOnInit("Request", {});

  }
  ngOnInit() {
   
  }
}
