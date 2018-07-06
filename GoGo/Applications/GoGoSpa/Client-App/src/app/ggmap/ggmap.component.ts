import { Component, OnInit, NgZone, Input, OnDestroy } from '@angular/core';
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
  @Input('marker') marker: string;
  //@Input('Origin') Origin: any;  // TODO: first letter of property must be lowercase
  //@Input('Destination') Destination: LatLng; // TODO: first letter of property must be lowercase
  private Waypts: InfoRequest[] = [];
  @Input('waypts') wayptsSubject: BehaviorSubject<InfoRequest[]>;
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

  //  //The location of you
  yourAddress: any;
  yourlat: number;
  yourlng: number;

  //  //Location of trip
  //latlngOrigin: LatLng;
  //latlngDestination: LatLng;


  //The array of waypoints
  optimizeRequest: any[] = [];
  iconNext = '../assets/location.png'; // TODO: do not use relative path, use asbsolute path instead '/assets/location.png'
  iconBase = '../assets/trucking.png'; // TODO: do not use relative path, use asbsolute path instead
  iconWarehouse = '../assets/warehouse2.png'; // TODO: do not use relative path, use asbsolute path instead

  constructor(
    private ngZone: NgZone,
    private shipmentService: ShipmentService,
    private saveService: SaveService
  ) {
  }

  ngOnInit() {
    this.initMap(this.latcenter, this.lngcenter);

    //if (APP_SETTINGS.shipmentMap.locationUpdateIntervalMilisec > 0) {
    //  this.intervalDisposer = setInterval(() => {
    //    this.GetYourPosition(() => {
    //      this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
    //    })
    //  }, APP_SETTINGS.shipmentMap.locationUpdateIntervalMilisec);

    //}
    this.getYourPosition(() => {
         this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
    })
    this.wayptsSubject.subscribe(result => {
      this.Waypts = result;
      this.GetYourPosition(() => {
        this.CalculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
      })
    });

  }


  ngOnDestroy(): void {
    clearInterval(this.intervalDisposer);
    this.wayptsSubject.unsubscribe();
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
    for (index = 0; index < this.Waypts.length; index++) {
      var contentString = `<p>${this.Waypts[index].description}</p>`
      var infoWindow = new google.maps.InfoWindow();
      var m = new google.maps.Marker({
        position: this.Waypts[index].latlng,
        icon: this.iconNext,
        map: this.map,
      });
      m.setMap(this.map);
      if (index == 0) {
        if (this.Waypts[index].description == "This is location picking") {
          m.setIcon(this.iconWarehouse)
        }
        else {
          m.setAnimation(google.maps.Animation.BOUNCE);
          infoWindow.setContent(contentString);
          infoWindow.open(this.map, m);
        }
      }
      else {
        this.openInfoWindow(m, contentString, infoWindow);
        this.closeInfoWindow(m, contentString, infoWindow);
      }
    }
  }

  // TODO: first letter of function must be lowercase
  refeshMarker(markers: any[]) {
    for (var i = 0; i < markers.length; i++)
      markers[i].setMap(null);
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
      position: this.Waypts[this.Waypts.length - 1].latlng,
      icon: this.iconNext,
      map: this.map
    });
    var index;
    for (index = 0; index < this.Waypts.length; index++) {
      if (index < (this.Waypts.length - 1) && this.Waypts[index].isRoute == true) {// TODO: never hardcode strign value in codes, create class to store constant
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
        console.log(route);
      }
      else {
        window.alert('Directions request failed due to ' + status);
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

  // TODO: first letter of function must be lowercase
  //Convert the address to the latitude and longitude
  Geocoding(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        let latlng = new google.maps.LatLng(latitude, longitude);
        return latlng;
      }
    });
  }

  // TODO: first letter of function must be lowercase
  RemoveAllMarkers() {
    //for (var i = 0; i < this.markers.length; i++) {
    //  this.markers[i].setMap(null);
    //}
  }


  // TODO: first letter of function must be lowercase
  //Get your position
  //Add the marker where you are
  //Address of where you are
  getYourPosition(callback: Function) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.yourlat = position.coords.latitude;
          this.yourlng = position.coords.longitude;
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
  GetLatlng(latitude, longitude) {
    let latlng = new google.maps.LatLng(latitude, longitude);
    return latlng;
  }

  // TODO: first letter of function must be lowercase
  GetMarker(latitue, longitude, urlIcon, map) {
    var marker = new google.maps.Marker({
      position: this.GetLatlng(latitue, longitude),
      icon: this.iconWarehouse,
      map: map
    });
    return marker;
  }
}
