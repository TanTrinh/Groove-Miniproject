import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParamsOptions, HttpParams } from '@angular/common/http/src/params';

// TODO: what is the purpose of AssignedComponent ?, can you remove this Component
import { SaveService } from '../../shared/service/save.service';
import { ShipmentService } from '../shipment.service';
import { ShipmentDetail } from '../shipment-picking/ShipmentDetail';
@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.scss']
})
export class AssignedComponent implements OnInit {
  data: any = {};
  shipmentAssigned: ShipmentDetail[];
  total: number;
  currentpage: number;



  constructor(
    private http: HttpClient,
    private router: Router,
    private service: ShipmentService
  ) { }

  paginators = [];
  ngOnInit() {
   
    this.LoadPage(1);
    console.log(this.shipmentAssigned);
  }
  LoadPage(page) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'Json'
      })
    };
    this.service.getListShipmentAssigned(54).subscribe(data => {
      console.log(data);
      this.shipmentAssigned = data;
    })
  }
  goToShipmentDeatil(code) {
    this.router.navigate(['./home/shipmentPicking', code]);
  }
  changeStatus(item: ShipmentDetail, status) {
    var param = { 'code': item.code, 'status': status }
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'Json'
      })
    };
    this.http.post('http://localhost:60012/api/Driver/shipmentfeedback', param, httpOptions).subscribe(result => {
      if (status == 'Picking') {
        item.status = status;
        this.goToShipmentDeatil(item.code)
      }
      else
        item.status = status;
    });
  }

  goToPageDetail(code) {
    this.router.navigate(['./home/shipmentPicking', code]);
  }
}

