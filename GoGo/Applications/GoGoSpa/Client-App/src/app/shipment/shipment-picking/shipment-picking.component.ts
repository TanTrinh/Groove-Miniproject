import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from './Location';
import { ShipmentAssigned } from '../ShipmentAssigned/ShipmentAssigned';
import { SaveService } from '../../shared/service/save.service';
import { RequestDetail } from '../../request/RequestDetail';
import { ShipmentService } from '../shipment.service';
import { error } from 'util';
@Component({
  selector: 'app-shipment-picking',
  templateUrl: './shipment-picking.component.html',
  styleUrls: ['./shipment-picking.component.scss']
})
export class ShipmentPickingComponent implements OnInit {
  data: any = {};
  shipmentDetail = new ShipmentAssigned();
  firstRequest = new RequestDetail();
  status='Waiting';
  code: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ResponseType': 'Json'
    })
  };
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private save: SaveService,
    private service: ShipmentService
  ) { }
  locationPicking: Location = {
    address: '',
    latitude: 0,
    longitude: 0
  }


  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    this.save.saveCode(this.code);
    this.service.getLocationPicking(this.code).subscribe(data => {
      this.locationPicking = data;
    })
    this.refeshShipment(this.code);
  }
  refeshShipment(code: string) {
    this.service.getShipmentDetail(this.code).subscribe(data => {
      this.shipmentDetail = data;
      console.log(this.shipmentDetail);
      if (this.shipmentDetail.currentRequest == "") {
        this.feedback(this.shipmentDetail, 'Completed');
      }
      else {
        this.service.getCurrentRequest(this.shipmentDetail.currentRequest).subscribe(data => {
          this.firstRequest = data;
        })
      }
    })
  }

  feedback(item: ShipmentAssigned, status) {
    var param = { 'code': item.code, 'status': status }
    console.log(this.status)
    this.service.changeStatusShipment(param).subscribe(data => {
      this.shipmentDetail = data;
      console.log(this.shipmentDetail);
    })
  }

  changeStatus(item: ShipmentAssigned, status) {
    var param = { 'code': item.currentRequest, 'status': status }
    this.service.changeStatusRequest(param).subscribe(data => {
      this.firstRequest = data;
    })
    if (status == "Completed") {
      this.refeshShipment(this.code);
    }
  }

  returnList() {
    this.router.navigate(['./home/assigned']);
  }
}
