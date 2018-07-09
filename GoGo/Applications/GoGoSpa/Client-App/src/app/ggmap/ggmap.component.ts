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

  constructor(
    private ngZone: NgZone,
    private shipmentService: ShipmentService,
    private saveService: SaveService
  ) {

  }

  ngOnInit() {
    console.log(this.isRoute)
    this.initMap(this.latcenter, this.lngcenter);
    if (this.isRoute == false) {
      console.log(1);
      var addressDeliveryValue: string;
      var addressWarehouseValue: string;
      this.addressDelivery.subscribe(result => {
        console.log(this.oldMarkerDelivery)
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
      var contentString = `<p>${this.Waypts[index].description}</p>`
      var infoWindow = new google.maps.InfoWindow();
      var m = new google.maps.Marker({
        position: this.Waypts[index].latlng,
        icon: this.iconNext,
        map: this.map,
      });
      if (this.Waypts[index].isRoute == true && isCurrent == false && index < this.Waypts.length) {
        isCurrent = true;
        m.setAnimation(google.maps.Animation.BOUNCE);
        this.oldMarker = m;
      }
      this.openInfoWindow(m, contentString, infoWindow);
      this.closeInfoWindow(m, contentString, infoWindow);

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

    var contentString = `<p>${this.Waypts[this.Waypts.length - 1].description}</p>`
    var infoWindow = new google.maps.InfoWindow();
    var markerDetination = new google.maps.Marker({
      position: this.Waypts[this.Waypts.length - 1].latlng,
      icon: this.iconNext,
      map: this.map,
    });
    this.openInfoWindow(markerDetination, contentString, infoWindow);
    this.closeInfoWindow(markerDetination, contentString, infoWindow);

    var index;
    for (index = 0; index < this.Waypts.length - 1; index++) {
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

  openInfoWindow(marker, data, infoWindow) {
    google.maps.event.addListener(marker, 'mouseover', function () {
      infoWindow.setContent("<div style = 'width:150px;min-height:10px;color:blue;text-align:center'>" + data + "</div>");
      infoWindow.open(this.map, marker);
    });
  }
  closeInfoWindow(marker, data, infoWindow) {
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
    this.openInfoWindow(marker, address, infoWindow);
    this.closeInfoWindow(marker, address, infoWindow);
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
