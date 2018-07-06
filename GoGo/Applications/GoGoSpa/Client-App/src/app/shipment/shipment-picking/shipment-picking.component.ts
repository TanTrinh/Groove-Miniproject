import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from './Location';
import { infoMarker } from './InfoRequest';

import { SaveService } from '../../shared/service/save.service';
import { requestDetail } from './RequestDetail';
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
  request = new requestDetail();
  status = 'Pending';
  code: string;
  requestList: requestDetail[]=[];
  problemMessage: string;
  role: string;
  active: boolean;

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
    })

    this.refeshShipment(this.code)
    
    this.GetRequestList();

  }

  onChangeWaypts() {
    this.Waypts = [];
    //add warehouse
    var info = new infoMarker();
    info.description = "This is location picking";
    info.isRoute = true;
    info.latlng = this.InitLatlng(this.locationPicking.latitude, this.locationPicking.longitude);
    if (this.shipmentDetail.status == this.statusShipment.SHIPPING || this.shipmentDetail.status == this.statusShipment.COMPLETED) {
      info.isRoute = false;
    }
    this.Waypts.push(info);
    //add request
    for (var item of this.requestList) {
      var infoMarkerRequest = new infoMarker();
      infoMarkerRequest.latlng = this.InitLatlng(item.location.latitude, item.location.longitude);
      infoMarkerRequest.description = item.code;
      infoMarkerRequest.isRoute = true;// TODO: never hardcode strign value in codes, create class to store constant
      
      if (item.status == this.statusDelivery.COMPLETED || item.isProblem == true) {// TODO: never hardcode strign value in codes, create class to store constant
        infoMarkerRequest.isRoute = false;// TODO: never hardcode strign value in codes, create class to store constant
      }
      this.Waypts.push(infoMarkerRequest);
    }
    this.wayptsSubject.next(this.Waypts);
  }

  refeshShipment(code: string) {
    this.service.getShipmentDetail(this.code).subscribe(data => {
      this.shipmentDetail = data;
      // TODO: never hardcode strign value in codes, create class to store constant
		  if (this.shipmentDetail.status == "Inactive") {
			   this.active = true;
			  } else { this.active = false }      


		if (this.shipmentDetail.currentRequest == "") {
        this.feedback(this.shipmentDetail, this.statusShipment.COMPLETED); // TODO: never hardcode strign value in codes, create class to store constant
        this.changeNav(this.listView);                          // TODO: never hardcode strign value in codes, create class to store constant
        this.Waypts = [];
      }
      else {
        this.service.getRequest(this.shipmentDetail.currentRequest).subscribe(data => {
          this.request = data;
          this.onChangeWaypts();
        })
      }
    })
  }

  feedback(item: ShipmentDetail, status) {
    this.service.changeDeliveryShipmentStatus(item.code, status).subscribe(data => {
      this.shipmentDetail = data;
      this.onChangeWaypts();
    })
  }

  changeStatus(item: requestDetail, status) {
    this.service.changeStatusRequest(item.code, status).subscribe(data => {
      this.request = data;
      this.GetRequestList();
      if (status == this.statusDelivery.COMPLETED) {// TODO: never hardcode strign value in codes, create class to store constant
        this.refeshShipment(this.code);
      }
      this.onChangeWaypts();
    })
  }
  nextRequest() {
    this.refeshShipment(this.code);
  }

  sendProblem(item: requestDetail, problem: boolean) {
    this.service.sendProblem(item.code, this.problemMessage).subscribe(data => {
      setTimeout(() => { this.request = data }, 2000);
      this.GetRequestList();
    });
  }

  resovleProblem(item: requestDetail) {
    this.service.resolveProblem(item.code).subscribe(data => {
      this.request = data;
      this.GetRequestList();
    })
  }

  viewRequest(item: requestDetail) {
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
      setTimeout(() => { this.requestList = data; }, 1000);
      this.onChangeWaypts();
    })
  }


  InitLatlng(latitude, longitude) {
    let latlng = new google.maps.LatLng(latitude, longitude);
    return latlng;
  }

  ChangeShipmentStatus(active: boolean) {
    var status = active;

    if (status == true) {
      this.service.ActivateShipment(this.shipmentDetail.id).subscribe(() => {
        this.active = false
        this.refeshShipment(this.shipmentDetail.code)
      })
    }
    else {
      this.service.DeactivateShipment(this.shipmentDetail.id).subscribe(() => {
        this.active = true
        this.refeshShipment(this.shipmentDetail.code)
      })
    }
  }

  UpdateShipment() {
    this.router.navigate(['/shipment/form/update', this.shipmentDetail.id]);
  }

 }

 
