import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from './Location';
import { ShipmentAssigned } from '../ShipmentAssigned/ShipmentAssigned';

@Component({
  selector: 'app-shipment-picking',
  templateUrl: './shipment-picking.component.html',
  styleUrls: ['./shipment-picking.component.scss']
})
export class ShipmentPickingComponent implements OnInit {

  shipmentDetail = {
    code: '',
    endDate: '',
    startDate: '',
    licensePlate: '',
    packageQuality: '',
    status: '',
  }
  code: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'ResponseType': 'Json'
    })
  };
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  locationPicking: Location = {
    address: '',
    latitude: 0,
    longitude: 0
  }
  data: any;


  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    this.http.get('http://localhost:60012/api/Driver/shipmentPicking?code=' + this.code, this.httpOptions).subscribe(result => {
      this.data = result;
      this.locationPicking = this.data;
    });
    this.http.get('http://localhost:60012/api/Driver/shipment?code=' + this.code, this.httpOptions).subscribe(result => {
      this.data = result;
      this.shipmentDetail = this.data;
      console.log(this.shipmentDetail);
    });
  }
  changeStatus(item: ShipmentAssigned, status) {
    var param = { 'code': item.code, 'status': status }
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'Json'
      })
    };
    this.http.post('http://localhost:60012/api/Driver/shipmentfeedback', param, httpOptions).subscribe(result => {
      item.status = status;
      if (status == "Completed")
        this.router.navigate(['./home/assigned'])
    });
  }
}
