import { Component, OnInit } from '@angular/core';
import { FormBaseComponent, FormValidationService } from '../../../shared/component/form';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../shared/component/dialog/notification.service';
import { RequestService } from '../request.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent extends FormBaseComponent implements OnInit {
  public WarehouseList: {id: '', nameWarehouse: ''};
  constructor(protected route: ActivatedRoute,
    protected router: Router,
    protected requestService: RequestService,
    protected notificationService: NotificationService,
    protected validationService: FormValidationService,
    private _notificationService: NotificationService,
  ) {
    super(route, router, notificationService, requestService, validationService);
    this.formConfiguration.dataSourceMapper.add('WarehouseList', requestService);
    super.formOnInit("Request", {});
  }
 
  ngOnInit() {
    
  }
}
