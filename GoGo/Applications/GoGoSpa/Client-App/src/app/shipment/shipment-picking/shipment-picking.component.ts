import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from './Location';
import { ShipmentAssigned } from '../ShipmentAssigned/ShipmentAssigned';
import { SaveService } from '../../shared/service/save.service';
import { RequestDetail } from '../../request/RequestDetail';
import { ShipmentService } from '../shipment.service';
import { LatLng } from '@agm/core';
import { Marker } from '@agm/core/services/google-maps-types';
declare var google: any;
@Component({
  selector: 'app-shipment-picking',
  templateUrl: './shipment-picking.component.html',
  styleUrls: ['./shipment-picking.component.scss']
})
export class ShipmentPickingComponent implements OnInit {
  data: any = {};
  statusNav = 'Request';
  lock = 0;
  shipmentDetail = new ShipmentAssigned();
  request = new RequestDetail();
  status = 'Waiting';
  code: string;
  requestList: RequestDetail[];

  Origin: LatLng;
  Destination: LatLng;
  Waypts: LatLng[] = [];
  Markers: Marker[] = [];

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
    this.request.location = new Location();
    this.code = this.route.snapshot.paramMap.get('code');
    this.save.saveCode(this.code);
    this.service.getLocationPicking(this.code).subscribe(data => {
      this.locationPicking = data;
    })
    this.refeshShipment(this.code);
    this.GetRequestList();
    this.Origin = this.InitLatlng(10.7711799, 106.7004174);
    this.Destination = this.InitLatlng(10.803780, 106.694184);
  }

  refeshShipment(code: string) {
    this.service.getShipmentDetail(this.code).subscribe(data => {
      this.shipmentDetail = data;
      if (this.shipmentDetail.currentRequest == "") {
        this.feedback(this.shipmentDetail, 'Completed');
        this.changeNav('List');
      }
      else {
        this.service.getRequest(this.shipmentDetail.currentRequest).subscribe(data => {
          this.request = data;
        })
      }
    })
  }
 
  feedback(item: ShipmentAssigned, status) {
    var param = { 'code': item.code, 'status': status }
    this.service.changeStatusShipment(param).subscribe(data => {
      this.shipmentDetail = data;
    })
  }

  changeStatus(item: ShipmentAssigned, status) {
    var param = { 'code': item.currentRequest, 'status': status }
    this.service.changeStatusRequest(param).subscribe(data => {
      this.request = data;
    })
    if (status == "Completed") {
      this.refeshShipment(this.code);

    }
  }
  viewRequest(item: RequestDetail) {
    this.changeNav('Request');
    this.service.getRequest(item.code).subscribe(data => {
      console.log(data);
      this.request = data;
    })
  }
  returnList() {
    this.router.navigate(['./home/assigned']);
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
        var latlng = this.InitLatlng(item.location.latitude, item.location.longitude);
        this.Waypts.push(latlng);
      }
      console.log(this.Waypts.length);
    })

  }

  InitLatlng(latitude, longitude) {
    let latlng = new google.maps.LatLng(latitude, longitude);
    return latlng;
  }
  InitMarker(latitude, longitude) {

  }
}
