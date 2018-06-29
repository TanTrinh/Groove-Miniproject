import { Component, OnInit, NgZone, Input } from '@angular/core';
import { LatLng } from '@agm/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { ShipmentService } from '../shipment/shipment.service';
import { Location } from '../shipment/shipment-picking/Location';
import { InfoRequest } from '../shipment/shipment-picking/InfoRequest';
import { SaveService } from '../shared/service/save.service';

declare var google: any;



@Component({
  selector: 'app-ggmap',
  templateUrl: './ggmap.component.html',
  styleUrls: ['./ggmap.component.scss']
})


export class GgmapComponent implements OnInit {

  @Input('marker') marker: string;
  @Input('Origin') Origin: any;
  @Input('Destination') Destination: LatLng;
  @Input('Waypts') Waypts: InfoRequest[] = [];
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


  //The location of you
  yourAddress: any;
  yourlat: number = 10.7725133;
  yourlng: number = 106.70578479999999;

  //Location of trip
  latlngOrigin: LatLng;
  latlngDestination: LatLng;


  //The array of waypoints
  optimizeRequest: any[] = [];
  iconNext = '../assets/location.png';
  iconBase = '../assets/trucking.png';
  iconWarehouse = '../assets/warehouse2.png';

  constructor(
    private ngZone: NgZone,
    private shipmentService: ShipmentService,
    private saveService: SaveService
  ) { }

  ngOnInit() {
    setInterval(() => { this.GetYourPosition() }, 5000);
    this.InitMap(this.latcenter, this.lngcenter);
   
    this.latlngDestination = this.GetLatlng(10.803780, 106.694184);
   
    setInterval(() => {
      setTimeout(() => { this.CalculateAndDisplayRoute(this.directionsService, this.directionsDisplay) }, 5000)
    }, 3000);
    //setTimeout(() => { this.DrawMarkers() }, 1000)
  }

  //Init the map
  InitMap(latitude, longitude) {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: this.zoom,
      center: { lat: latitude, lng: longitude },
      scrollwheel: true,
      zoomControl: true
    });
    this.directionsDisplay.setMap(this.map);
  }
  DrawMarkers() {
    var index;
    for (index = 0; index < this.Waypts.length; index++) {
      var contentString = `<p>${this.Waypts[index].code}</p>`
      var infoWindow = new google.maps.InfoWindow();
      var m = new google.maps.Marker({
        position: this.Waypts[index].latlng,
        icon: this.iconNext,
        map: this.map,
      });
      m.setMap(this.map);
      if (index == 0) {
        if (this.Waypts[index].code == "This is location picking") {
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

  RefeshMarker(markers: any[]) {
    console.log(markers.length)
    for (var i = 0; i < markers.length; i++)
      markers[i].setMap(null);
  }
  //Optimize the route and show
  //Input:
  //start point: originLocation || end point: destinationLocation
  //checkboxArray: the array of detination
  CalculateAndDisplayRoute(directionsService, directionsDisplay) {
    this.DrawMarkers();
    console.log(this.Waypts);
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
      if (index < (this.Waypts.length - 1) && this.Waypts[index].status!='unActive') {
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
        //console.log(route);
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

  RemoveAllMarkers() {
    //for (var i = 0; i < this.markers.length; i++) {
    //  this.markers[i].setMap(null);
    //}
  }

  //Get your position
  //Add the marker where you are
  //Address of where you are
  GetYourPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          //this.yourlat = position.coords.latitude;
          //this.yourlng = position.coords.longitude;
          this.yourlat = this.yourlat + 0.0001;
          this.yourlng = this.yourlng + 0.0001;
          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(this.yourlat, this.yourlng)
          //let request = {
          //  latLng: latlng
          //};
          //geocoder.geocode(request, (results, status) => {
          //  if (status == google.maps.GeocoderStatus.OK) {
          //    if (results[0] != null) {
          //      this.ngZone.run(() => { this.yourAddress = results[0].formatted_address });
          //    } else {
          //      alert("No address available");
          //    }
          //  }
          //});
          return latlng;
        },
        error => {
          console.log("Error code: " + error.code + "<br /> Error message: " + error.message);
        }
      );
    }
  }

  //Get the Latlng
  GetLatlng(latitude, longitude) {
    let latlng = new google.maps.LatLng(latitude, longitude);
    return latlng;
  }

  GetMarker(latitue, longitude, urlIcon, map) {
    var marker = new google.maps.Marker({
      position: this.GetLatlng(latitue, longitude),
      icon: this.iconWarehouse,
      map: map
    });
    return marker;
  }
}
