import { Component, OnInit } from '@angular/core';
import { ShipmentAssigned } from './ShipmentAssigned';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParamsOptions, HttpParams } from '@angular/common/http/src/params';
@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.scss']
})
export class AssignedComponent implements OnInit {
  data: any = {};
  shipmentAssigned: ShipmentAssigned[];
  total: number;
  currentpage: number;



  constructor(private http: HttpClient, private router: Router) { }

  paginators = [];
  ngOnInit() {
    this.LoadPage(1);
  }
  LoadPage(page) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'Json'
      })
    };
    this.http.get('http://localhost:58976/api/Driver/shipmentAssigned?id=54').subscribe(result => {
      //this.paginators = [];
      this.data = result;
      this.shipmentAssigned = this.data;
      console.log(this.shipmentAssigned);
    });
  }
  goToShipmentDeatil(code) {
    this.router.navigate(['./home/shipmentPicking',code]);
  }
  changeStatus(item: ShipmentAssigned, status) {
    var param = { 'code': item.code, 'status': status }
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'Json'
      })
    };
    this.http.post('http://localhost:58976/api/Driver/shipmentfeedback', param, httpOptions).subscribe(result => {
      if (status == 'Picking') {
        item.status = status;
        this.goToShipmentDeatil(item.code)
      }
      else
        item.status = status;
    });
  }
}

