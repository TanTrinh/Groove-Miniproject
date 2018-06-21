import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../shared/sevices/sharing-service.service';
import { RequestService } from '../../request/request-service.service';
import { Router } from '@angular/router';
import { Http, Request } from '@angular/http';
import { PagerService } from '../../shared/sevices/pager-service.service';

@Component({
  selector: 'app-shipment-creating',
  templateUrl: './shipment-creating.component.html',
  styleUrls: ['./shipment-creating.component.scss']
})
export class ShipmentCreatingComponent implements OnInit {

  constructor(private sharingService: SharingService, private requestService: RequestService, private router: Router, private http: Http, private pagerService: PagerService) { }

  private requestIdList = this.sharingService.fetch();

  ngOnInit() {
    console.log(this.requestIdList);
  }


}
