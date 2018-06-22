import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../shared/sevices/sharing-service.service';
import { RequestService } from '../../request/request-service.service';
import { Router } from '@angular/router';
import { Http, Request } from '@angular/http';
import { PagerService } from '../../shared/sevices/pager-service.service';
import { Observable } from 'rxjs-compat/Observable';
import { ShipmentService } from '../shipment.service';

@Component({
  selector: 'app-shipment-creating',
  templateUrl: './shipment-creating.component.html',
  styleUrls: ['./shipment-creating.component.scss']
})
export class ShipmentCreatingComponent{
  private view: Observable<any>;

  constructor(private service: ShipmentService) {
      this.view = service;
      this.service.query();
  }

}
