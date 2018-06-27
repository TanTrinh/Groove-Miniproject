import { Component, OnInit, NgZone, Input } from '@angular/core';
import { LatLng } from '@agm/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { ShipmentService } from '../shipment/shipment.service';
import { Location } from '../shipment/shipment-picking/Location';

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
  @Input('Waypts') Waypts: any[] = [];
  @Input('Markers') Markers: Marker[] = [];

  //parameter 
  //parameter of map
  latcenter: number = 10.7711799;
  lngcenter: number = 106.7004174;
  zoom: number = 15;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  map: undefined;
  markers = [];
  //The location of you
  yourAddress: any;
  yourlat: number = 10.7725133;
  yourlng: number = 106.70578479999999;

  //Location of trip
  latlngOrigin: LatLng;
  latlngDestination: LatLng;


  //The array of waypoints
  optimizeRequest: any[] = [];
  iconWarehouse = '../assets/location.png';
  iconBase = '../assets/trucking.png';
  iconNext = '../assets/next.png';

  constructor(
    private ngZone: NgZone,
    private shipmentService: ShipmentService
  ) { }

  ngOnInit() {
    setInterval(() => { this.GetYourPosition() }, 1000);
    this.InitMap(this.latcenter, this.lngcenter);
    setInterval(() => { this.latlngOrigin = this.GetLatlng(this.yourlat, this.yourlng) }, 3000);
    this.latlngDestination = this.GetLatlng(10.803780, 106.694184);

    //setInterval(() => {
    setTimeout(() => { this.CalculateAndDisplayRoute(this.directionsService, this.directionsDisplay, this.latlngOrigin, this.Waypts) }, 1000)

    //  }, 3000);

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

  //Optimize the route and show
  //Input:
  //start point: originLocation || end point: destinationLocation
  //checkboxArray: the array of detination
  CalculateAndDisplayRoute(directionsService, directionsDisplay, originLocation: LatLng, checkboxArray: any[]) {
    var waypts = [];
    var markers = [];
    var markerOrigin = new google.maps.Marker({
      position: { lat: this.yourlat, lng: this.yourlng },
      icon: this.iconBase,
      label: 'A',
      map: this.map
    });
    markers.push(markerOrigin);

    var index;
    //console.log(checkboxArray.length);
    for (index = 0; index < checkboxArray.length; index++) {
      if (index == 0) {
        var m = new google.maps.Marker({
          position: checkboxArray[index],
          icon: this.iconWarehouse,
          animation: google.maps.Animation.BOUNCE,
          map: this.map
        });
        markers.push(m);
      }
      else {
        var m = new google.maps.Marker({
          position: checkboxArray[index],
          icon: this.iconWarehouse,
          map: this.map
        });
        markers.push(m);
      }
      if (index < (checkboxArray.length - 1)) {
        waypts.push({
          location: m.get('position'),
          stopover: true,
        });
      }
    }
    var optimize: Location[]=[];
    directionsService.route({
      origin: markers[0].get('position'),
      destination: markers[index].get('position'),
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        var route = response.routes[0];
        for (var i = 0; i < index; i++) {
          var location = new Location();
          location.latitude = route.legs[i].end_location.lat();
          location.longitude = route.legs[i].end_location.lng();
          optimize.push(location)
        }
      }
      else {
        window.alert('Directions request failed due to ' + status);
      }
      });
    var pama
    setTimeout(() => { pama = { code: '270620181056GG28', order: optimize } }, 1000);
    setTimeout(() => {
      console.log(pama), this.shipmentService.changeOrderReqeust(pama).subscribe(data => { })
    }, 1000);

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
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
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
