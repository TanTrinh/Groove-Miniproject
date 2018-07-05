import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from './Location';
import { InfoRequest } from './InfoRequest';

import { SaveService } from '../../shared/service/save.service';
import { RequestDetail } from './RequestDetail';
import { ShipmentService } from '../shipment.service';
import { LatLng } from '@agm/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { ShipmentDetail } from './ShipmentDetail';
import { Shipment } from '../../shared/models/request';


declare var google: any;
@Component({
  selector: 'app-shipment-picking',
  templateUrl: './shipment-picking.component.html',
  styleUrls: ['./shipment-picking.component.scss']
})
export class ShipmentPickingComponent implements OnInit {
  data: any = {};
  statusNav = 'Request';
  shipmentDetail= new ShipmentDetail();
  request = new RequestDetail();
  status = 'Waiting';
  code: string;
  requestList: RequestDetail[];
  problemMessage: string;

  Destination: LatLng;
  Waypts: InfoRequest[] = [];
  Markers: any[] = [];

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
    this.Markers = [];
    this.Waypts = [];
    this.request.location = new Location();
    this.code = this.route.snapshot.paramMap.get('code');
    console.log(this.code)
    this.save.saveCode(this.code);
    this.service.GetLocationPicking(this.code).subscribe(data => {
      this.locationPicking = data;
      console.log(this.locationPicking)
      var info = new InfoRequest();
      info.code = "This is location picking";
      info.status = "Active";
      info.latlng = this.InitLatlng(this.locationPicking.latitude, this.locationPicking.longitude);
      this.Waypts.unshift(info);
    })
    this.refeshShipment(this.code);
    this.GetRequestList();
  }

  //Tested
  refeshShipment(code: string) {
    this.service.GetShipmentDetail(this.code).subscribe(data => {

      console.log(data)
      this.shipmentDetail = data;
      
      console.log(this.shipmentDetail.status)
      if (this.shipmentDetail.status == "Shipping") {
        this.Waypts[0].status = "unActive";
        console.log(this.shipmentDetail)
      }
      if (this.shipmentDetail.currentRequest == "") {
        this.feedback(this.shipmentDetail, 'Completed');
        this.changeNav('List');
      }
      else {
        console.log(data);
        this.service.GetRequest(this.shipmentDetail.currentRequest).subscribe(data => {
          this.request = data;
          console.log(this.request);
        })
      }
    })
  }

  feedback(item: ShipmentDetail, status) {
    if (status == "Shipping") {
      //  this.Waypts.splice(0, 1);
      console.log(this.Waypts);
    }
    this.service.ChangeDeliveryShipmentStatus(item.code,status).subscribe(data => {
      this.shipmentDetail = data;
      console.log(this.shipmentDetail)
      console.log(this.request)
    })
  }

  changeStatus(item: ShipmentDetail, status) {
    this.service.ChangeStatusRequest(item.currentRequest, status).subscribe(data => {
      this.request = data;
      console.log(this.request)
      this.GetRequestList();
      if (status == "Completed") {
        this.refeshShipment(this.code);
      }
    })

  }
  nextRequest() {
    this.refeshShipment(this.code);
  }
  sendProblem(item: RequestDetail, problem: boolean) {
    console.log(item);
    console.log(this.problemMessage);
    this.service.SendProblem(item.code,problem, this.problemMessage).subscribe(data => {
      this.request = data;
      this.GetRequestList();
    });
  }
  viewRequest(item: RequestDetail) {
    this.changeNav('Request');
    this.service.GetRequest(item.code).subscribe(data => {
      console.log(data);
      this.request = data;
    })
  }
  returnList() {
    this.router.navigate(['./shipment']);
  }
  gotoCurrentRequest() {
    this.service.GetRequest(this.shipmentDetail.currentRequest).subscribe(data => {
      this.request = data;
    })
  }
  changeNav(status) {
    this.statusNav = status;
  }

  GetRequestList() {
    this.service.GetListRequest(this.code).subscribe(data => {
      console.log(data);
      this.requestList = data;
      console.log(this.requestList);
      for (var item of this.requestList) {
        var info = new InfoRequest();
        info.latlng = this.InitLatlng(item.location.latitude, item.location.longitude);
        info.code = item.code;
        info.status = "Active";
        if (item.status != "Waiting") {
          info.status = "unActive";
        }
        this.Waypts.push(info);
      }
      this.save.waypts = this.Waypts;
    })
  }


  InitLatlng(latitude, longitude) {
    let latlng = new google.maps.LatLng(latitude, longitude);
    return latlng;
  }
  InitMarker(latitude, longitude) {

  }
}
