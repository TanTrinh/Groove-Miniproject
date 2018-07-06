import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from './Location';
import { infoMarker } from './InfoRequest';

import { SaveService } from '../../shared/service/save.service';
import { RequestDetail } from './RequestDetail';
import { ShipmentService } from '../shipment.service';
import { LatLng } from '@agm/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { ShipmentDetail } from './ShipmentDetail';
import { Shipment } from '../../shared/models/request';
import { BehaviorSubject } from 'rxjs';
import { SharingService } from '../../shared/sevices/sharing-service.service';
import { StatusShipment, StatusDelivery, Problem } from './Status';


declare var google: any;
@Component({
  selector: 'app-shipment-picking',
  templateUrl: './shipment-picking.component.html',
  styleUrls: ['./shipment-picking.component.scss']
})
export class ShipmentPickingComponent implements OnInit {
  public wayptsSubject: BehaviorSubject<infoMarker[]> = new BehaviorSubject<infoMarker[]>([]);

  private statusShipment = new StatusShipment();
  private statusDelivery = new StatusDelivery();
  private problem: boolean = true;

  private requestView: string = 'Request';
  private listView: string = 'List';
  private statusNav = this.requestView;

  data: any = {};
  shipmentDetail = new ShipmentDetail();
  request = new RequestDetail();
  status = 'Pending';
  active: boolean = false;
  code: string;
  requestList: RequestDetail[];
  problemMessage: string;
  role: string;

  Destination: LatLng;
  Waypts: infoMarker[] = [];
  Markers: any[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private save: SaveService,
    private service: ShipmentService,
    private shareService: SharingService
  ) {
    this.role = this.shareService.getRole();
    console.log(this.role);
  }

  // TODO: move properties declarition on top of the class
  //I do create class Location and I init class
  locationPicking = new Location();


  ngOnInit() {
    this.Markers = [];
    this.Waypts = [];
    this.request.location = new Location();
    this.code = this.route.snapshot.paramMap.get('code');
    this.save.saveCode(this.code);
    this.service.getLocationPicking(this.code).subscribe(data => {
      this.locationPicking = data;
      var info = new infoMarker();
      info.description = "This is location picking";
      info.isRoute = true;
      info.latlng = this.InitLatlng(this.locationPicking.latitude, this.locationPicking.longitude);
      this.Waypts.unshift(info);
    })
    this.refeshShipment(this.code);
    this.GetRequestList();
  }

  onChangeWaypts() {
    this.wayptsSubject.next(this.Waypts);
  }

  refeshShipment(code: string) {
    this.service.getShipmentDetail(this.code).subscribe(data => {
      this.shipmentDetail = data;
      // TODO: never hardcode strign value in codes, create class to store constant
      if (this.shipmentDetail.status == this.statusDelivery.SHIPPING) {
        this.Waypts[0].isRoute = false;             // TODO: never hardcode strign value in codes, create class to store constant
        this.onChangeWaypts();
      }
      if (this.shipmentDetail.currentRequest == "") {
        this.feedback(this.shipmentDetail, this.statusShipment.COMPLETED); // TODO: never hardcode strign value in codes, create class to store constant
        this.changeNav(this.requestView);                          // TODO: never hardcode strign value in codes, create class to store constant
      }
      else {
        this.service.getRequest(this.shipmentDetail.currentRequest).subscribe(data => {
          this.request = data;
        })
      }
    })
  }

  feedback(item: ShipmentDetail, status) {
    if (status == this.statusShipment.SHIPPING) {                       // TODO: never hardcode strign value in codes, create class to store constant
      //  this.Waypts.splice(0, 1);

    }
    this.service.changeDeliveryShipmentStatus(item.code, status).subscribe(data => {
      this.shipmentDetail = data;
    })
  }

  changeStatus(item: RequestDetail, status) {
    this.service.changeStatusRequest(item.code, status).subscribe(data => {
      this.request = data;
      this.GetRequestList();
      if (status == this.statusDelivery.COMPLETED) {// TODO: never hardcode strign value in codes, create class to store constant
        this.refeshShipment(this.code);
      }
    })
  }
  nextRequest() {
    this.refeshShipment(this.code);
  }

  sendProblem(item: RequestDetail, problem: boolean) {
    this.service.sendProblem(item.code, this.problemMessage).subscribe(data => {
      this.request = data;
      this.GetRequestList();
    });
  }

  resovleProblem(item: RequestDetail) {
    this.service.resolveProblem(item.code).subscribe(data => {
      this.request = data;
      this.GetRequestList();
    })
  }

  viewRequest(item: RequestDetail) {
    this.changeNav(this.requestView);// TODO: never hardcode strign value in codes, create class to store constant
    this.service.getRequest(item.code).subscribe(data => {
      this.request = data;
    })
  }

  returnList() {
    this.router.navigate(['./shipment']);
  }

  gotoCurrentRequest() {
    this.service.getRequest(this.shipmentDetail.currentRequest).subscribe(data => {
      this.request = data;
    })
  }

  changeNav(status) {
    this.statusNav = status;
  }

  GetRequestList() {
    this.service.getListRequest(this.code).subscribe(data => {
      this.requestList = data;
      for (var item of this.requestList) {
        var info = new infoMarker();
        info.latlng = this.InitLatlng(item.location.latitude, item.location.longitude);
        info.description = item.code;
        info.isRoute = true;// TODO: never hardcode strign value in codes, create class to store constant
        //I will change when I completed the googlemap api because the google map api, I will use it
        if (item.status == this.statusDelivery.COMPLETED) {// TODO: never hardcode strign value in codes, create class to store constant
          info.isRoute = false;// TODO: never hardcode strign value in codes, create class to store constant
        }
        this.Waypts.push(info);
      }
      this.onChangeWaypts();
    })
  }

  ChangeStatusShipment(active: boolean) {
    this.active = active;
    //this.service.ActivateShipment(this.shipmentDetail.id).subscribe();
  }


  InitLatlng(latitude, longitude) {
    let latlng = new google.maps.LatLng(latitude, longitude);
    return latlng;
  }
}
