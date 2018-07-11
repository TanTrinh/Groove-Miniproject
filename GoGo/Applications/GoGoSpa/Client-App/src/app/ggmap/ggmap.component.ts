import { Component, OnInit, NgZone, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { LatLng } from '@agm/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { ShipmentService } from '../shipment/shipment.service';
import { Location } from '../shipment/shipment-picking/Location';
import { infoMarker } from '../shipment/shipment-picking/InfoRequest';
import { SaveService } from '../shared/service/save.service';
import { APP_SETTINGS } from '../app-setting';
import { BehaviorSubject } from 'rxjs';

declare var google: any;



@Component({
  selector: 'app-ggmap',
  templateUrl: './ggmap.component.html',
  styleUrls: ['./ggmap.component.scss']
})


export class GgmapComponent implements OnInit, OnDestroy {
  private intervalDisposer: any;
  @Input('isRoute') isRoute: boolean;
  @Input('marker') marker: string;
  @Input('addressWarehouse') addressWarehouse: BehaviorSubject<string>;
  @Input('addressDelivery') addressDelivery: BehaviorSubject<string>;
  //@Input('Origin') Origin: any;  // TODO: first letter of property must be lowercase
  //@Input('Destination') Destination: LatLng; // TODO: first letter of property must be lowercase
  private Waypts: infoMarker[] = [];
  @Input('waypts') wayptsSubject: BehaviorSubject<infoMarker[]>;

  @Output() addressDeliveryLocated = new EventEmitter();
  @Output() markerClick = new EventEmitter();
  //  @Input('Markers') Markers: any[] = [];

  //parameter 
  //parameter of map
  latcenter: number = 10.7711799;
  lngcenter: number = 106.7004174;
  zoom: number = 15;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  map: undefined;

  oldMarkerOrigin = new google.maps.Marker();
  oldMarker = new google.maps.Marker();
  oldMarkerDelivery = new google.maps.Marker();

  markersClean: any[] = [];
  //  //The location of you
  yourAddress: any;
  yourlat: number;
  yourlng: number;

  //The array of waypoints
  optimizeRequest: any[] = [];
  iconNext = '/assets/location.png'; // TODO: do not use relative path, use asbsolute path instead '/assets/location.png'
  iconBase = '/assets/trucking.png'; // TODO: do not use relative path, use asbsolute path instead
  iconWarehouse = '/assets/warehouse2.png'; // TODO: do not use relative path, use asbsolute path instead
  iconParking = '/assets/park.png'; // TODO: do not use relative path, use asbsolute path instead

  constructor(
    private ngZone: NgZone,
    private shipmentService: ShipmentService,
    private saveService: SaveService
  ) {

  }

  ngOnInit() {
    this.initMap(this.latcenter, this.lngcenter);
    if (this.isRoute == false) {
      var addressDeliveryValue: string;
      var addressWarehouseValue: string;
      this.addressDelivery.subscribe(result => {

        addressDeliveryValue = result
        if (addressDeliveryValue != '') {
          this.geocodeAddress(addressDeliveryValue, this.iconNext, this.map);
        }
      })

    }
    if (this.isRoute == true) {
      if (APP_SETTINGS.shipmentMap.locationUpdateIntervalMilisec > 0) {
        this.intervalDisposer = setInterval(() => {
          this.getYourPosition(() => {
            this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
          })
        }, APP_SETTINGS.shipmentMap.locationUpdateIntervalMilisec);

      }
      this.wayptsSubject.subscribe(result => {
        this.Waypts = result;
        if (this.Waypts.length > 0) {
          this.getYourPosition(() => {
            this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
          })
        }
      });
    }
  }


  ngOnDestroy(): void {
    clearInterval(this.intervalDisposer);

  }

  // TODO: first letter of function must be lowercase
  //Init the map
  initMap(latitude, longitude) {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: this.zoom,
      center: { lat: latitude, lng: longitude },
      scrollwheel: true,
      zoomControl: true
    });
    this.directionsDisplay.setMap(this.map);
  }

  // TODO: first letter of function must be lowercase
  drawMarkers() {
    var index;
    var isCurrent: boolean = false;

    //init Warehouse marker
    var marker = new google.maps.Marker({
      position: this.Waypts[0].latlng,
      icon: this.iconWarehouse,
      map: this.map,
    });
    this.markersClean.push(marker);
    for (index = 1; index < this.Waypts.length - 1; index++) {
      var infoWindow = new google.maps.InfoWindow();
      var m = new google.maps.Marker({
        position: this.Waypts[index].latlng,
        icon: this.iconNext,
        map: this.map,
      });
      if (this.Waypts[index].isRoute == true && isCurrent == false && index < this.Waypts.length) {
        isCurrent = true;
        m.setAnimation(google.maps.Animation.BOUNCE);
      }
      this.clickInfoWindow(m, this.Waypts[index].description)
      this.hoverInfoWindow(m, this.Waypts[index], infoWindow);
      this.mouseOutInfoWindow(m, this.Waypts[index].description, infoWindow);
      this.markersClean.push(m);
    }
  }

  // TODO: first letter of function must be lowercase
  refeshMarker() {
    for (var i = 0; i < this.markersClean.length; i++)
      this.markersClean[i].setMap(null);
  }

  // TODO: first letter of function must be lowercase
  //Optimize the route and show
  //Input:
  //start point: originLocation || end point: destinationLocation
  //checkboxArray: the array of detination
  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    if (this.Waypts.length <= 0) {
      return;
    }
    this.refeshMarker();
    this.drawMarkers();
    var waypts = [];
    this.oldMarkerOrigin.setMap(null);
    var markerOrigin = new google.maps.Marker({
      position: { lat: this.yourlat, lng: this.yourlng },
      icon: this.iconBase,
      map: this.map
    });
    this.oldMarkerOrigin = markerOrigin;
    var markerDetination = new google.maps.Marker({
      map: this.map,
    });
    if (this.Waypts[this.Waypts.length - 1].isRoute == false) {
      markerDetination.setPosition(markerOrigin.get('position'))
      markerDetination.setIcon(this.iconBase);
    }
    else {
      markerDetination.setPosition(this.Waypts[this.Waypts.length - 1].latlng)
      markerDetination.setIcon(this.iconNext)
      var infoWindow = new google.maps.InfoWindow();
      this.clickInfoWindow(markerDetination, this.Waypts[this.Waypts.length - 1].description)
      this.hoverInfoWindow(markerDetination, this.Waypts[this.Waypts.length - 1], infoWindow);
      this.mouseOutInfoWindow(markerDetination, this.Waypts[this.Waypts.length - 1].description, infoWindow);
    
    }
    var index;
    for (index = 0; index < this.Waypts.length; index++) {

      if (this.Waypts[index].isRoute == true) {// TODO: never hardcode strign value in codes, create class to store constant
        waypts.push({
          location: this.Waypts[index].latlng,
          stopover: true,
        });
      }
    }

    directionsService.route({
      origin: markerOrigin.get('position'),
      destination: markerDetination.get('position'),
      waypoints: waypts,
      optimizeWaypoints: false,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        var route = response.routes[0];
      }
      else {
        //window.alert('Directions request failed due to ' + status);
      }
    });

  }

  clickInfoWindow(marker, data) {
    let $selt = this;
    google.maps.event.addListener(marker, 'click', function () {
      $selt.markerClick.emit({
        code: data
      })
    });
  }

  hoverInfoWindow(marker, data, infoWindow) {
    google.maps.event.addListener(marker, 'mouseover', function () {
      infoWindow.setContent("<div style = 'width:150px;min-height:10px'>" +
        "<p style='font-weight:500; font-size:14px'>" + data.description + "</p>" +
        "<p style='font-size:14px'>" + data.address + "</p>" +
        "</div>");
      //  infoWindow.setContent(contentString);
      infoWindow.open(this.map, marker);

    });
  }
  mouseOutInfoWindow(marker, data, infoWindow) {
    google.maps.event.addListener(marker, 'mouseout', function () {

      infoWindow.close(this.map, marker);
    });
  }


  geocodeAddress(address, urlIcon, map) {
    var geocoder = new google.maps.Geocoder();
    this.oldMarkerDelivery.setMap(null);
    var marker = new google.maps.Marker();
    this.oldMarkerDelivery = marker;
    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(address);
    infoWindow.open(map, marker);
    geocoder = new google.maps.Geocoder();
    let $self = this;
    if (geocoder) {
      geocoder.geocode({
        'address': address
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          let latlng = new google.maps.LatLng(lat, lng)

          $self.addressDeliveryLocated.emit({
            lat: lat,
            lng: lng
          });
          //marker = new google.maps.Marker({
          //  position: latlng,
          //  icon: urlIcon,
          //  map: map
          //});
          marker.setPosition(latlng);
          marker.setIcon(urlIcon);
          marker.setMap(map);
          map.setCenter(latlng);
        }
      }
      );
    }
  }

  // TODO: first letter of function must be lowercase
  //Get your position
  //Add the marker where you are
  //Address of where you are
  getYourPosition(callback: Function) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.yourlat = Number(position.coords.latitude);
          this.yourlng = Number(position.coords.longitude);
          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(this.yourlat, this.yourlng)
          callback(latlng);
        },
        error => {
          console.log("Error code: " + error.code + "<br /> Error message: " + error.message);
        }
      );
    }
  }

  // TODO: first letter of function must be lowercase
  //Get the Latlng
  getLatlng(latitude, longitude) {
    let latlng = new google.maps.LatLng(latitude, longitude);
    return latlng;
  }

  // TODO: first letter of function must be lowercase
  getMarkerDelivery(lat, lng, urlIcon, map) {
    var marker = new google.maps.Marker({
      position: this.getLatlng(lat, lng),
      icon: urlIcon,
      map: map
    });
  }

}
