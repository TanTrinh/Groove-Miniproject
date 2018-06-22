import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaveService } from '../../shared/service/save.service';
import { HttpClient } from '@angular/common/http';
import { RequestDetail } from '../RequestDetail';

@Component({
  selector: 'app-current-request',
  templateUrl: './current-request.component.html',
  styleUrls: ['./current-request.component.scss']
})
export class CurrentRequestComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private save: SaveService
  ) { }
  statusShipment: any = {};
  data: any = {};
  currentRequest: RequestDetail = this.data;
  ngOnInit() {
   
    this.http.get('http://localhost:60012/api/Driver/shipment/requestDetail?code=' + this.save.getCode()).subscribe(result => {
      this.data = result;
      this.currentRequest = this.data;
    });
    this.statusShipment = this.save.getStatusShipment();
    console.log(this.statusShipment);
  }
  //if(status == "Shipping") {
  //this.http.post('http://localhost:60012/api/Driver/changeStatus', { 'code': this.firstRequest.code, 'status': 'Picking' }, httpOptions).subscribe(result => {
  //  this.firstRequest.status = 'Picking';
  //});
//}
}
