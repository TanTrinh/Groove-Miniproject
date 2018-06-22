import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from './Location';
import { ShipmentAssigned } from '../ShipmentAssigned/ShipmentAssigned';
import { SaveService } from '../../shared/service/save.service';
import { RequestDetail } from '../../request/RequestDetail';
@Component({
  selector: 'app-shipment-picking',
  templateUrl: './shipment-picking.component.html',
  styleUrls: ['./shipment-picking.component.scss']
})
export class ShipmentPickingComponent implements OnInit {
  data: any = {};
  shipmentDetail: ShipmentAssigned = this.data;
  firstRequest: RequestDetail = this.data;
  status: string;
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
    private save: SaveService
  ) { }
  locationPicking: Location = {
    address: '',
    latitude: 0,
    longitude: 0
  }


  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    this.save.saveCode(this.code);
    this.http.get('http://localhost:60012/api/Driver/shipmentPicking?code=' + this.code, this.httpOptions).subscribe(result => {
      this.data = result;
      this.locationPicking = this.data;
    });
    this.http.get('http://localhost:60012/api/Driver/shipment?code=' + this.code, this.httpOptions).subscribe(result => {
      this.data = result;
      this.shipmentDetail = this.data;
      this.save.saveStatus(this.shipmentDetail.status);
      console.log(this.shipmentDetail.status);
    });
   
   
    //this.http.get('http://localhost:60012/api/Driver/shipment/requestDetail?code=' + this.code, this.httpOptions).subscribe(result => {
    //  this.data = result;
    //  this.firstRequest = this.data;
    //  console.log(this.firstRequest);
      
    //});
   // this.router.navigate([`./home/shipmentPicking/${this.code}/currentRequest`]);
  }
  feedback(item: ShipmentAssigned, status) {
    var param = { 'code': item.code, 'status': status }
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'Json'
      })
    };
    this.http.post('http://localhost:60012/api/Driver/shipmentfeedback', param, httpOptions).subscribe(result => {
      item.status = status;
      this.save.saveStatus(status);
      if (status == 'Shipping')
      if (status == "Completed")
        this.router.navigate(['./home/assigned'])
    });
  }
}
