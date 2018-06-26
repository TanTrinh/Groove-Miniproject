import { Component, OnInit, NgZone } from '@angular/core';
import { LatLng } from '@agm/core'; 
declare var google: any;



@Component({
  selector: 'app-ggmap',
  templateUrl: './ggmap.component.html',
  styleUrls: ['./ggmap.component.scss']
})


export class GgmapComponent implements OnInit {
  //parameter 
  //parameter of map
  latcenter: number = 10.7711799;
  lngcenter: number = 106.7004174;
  zoom: number = 15;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
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
  checkboxArray: any[] = [
    'benthanhmarket',
    { lat: 10.7711899, lng: 106.7304174 },
    'dai hoc khoa hoc tu nhien'
  ];
  iconWarehouse = '../assets/warehouse.png';
  iconBase = '../assets/trucking.png';

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    setInterval(() => { this.GetYourPosition() }, 1000);
    this.InitMap(this.latcenter, this.lngcenter);
    this.latlngOrigin = this.GetLatlng(10.7711799, 106.7004174);
    this.latlngDestination = this.GetLatlng(10.803780, 106.694184);
    this.CalculateAndDisplayRoute(this.directionsService, this.directionsDisplay, this.latlngOrigin, this.latlngDestination, this.checkboxArray);
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
  CalculateAndDisplayRoute(directionsService, directionsDisplay, originLocation, destinationLocation, checkboxArray) {
    var waypts = [];
    for (var i = 0; i < checkboxArray.length; i++) {
      waypts.push({
        location: checkboxArray[i],
        stopover: true
      });
    }
    directionsService.route({
      origin: originLocation,
      destination: destinationLocation,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        var route = response.routes[0];
        //var summaryPanel = document.getElementById('directions-panel');
        //summaryPanel.innerHTML = '';
        //// For each route, display summary information.
        //for (var i = 0; i < route.legs.length; i++) {
        //  var routeSegment = i + 1;
        //  summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
        //    '</b><br>';
        //  summaryPanel.innerHTML += route.legs[i].start_address + '<br> ';
        //  summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        //  summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        //}
        //return summaryPanel;
      }
      else {
        window.alert('Directions request failed due to ' + status);
      }
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
          this.yourlng = this.yourlng+0.0001;
          console.log(this.yourlat, this.yourlng);
          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(this.yourlat, this.yourlng);
          var marker = new google.maps.Marker({
            position: { lat: this.yourlat = this.yourlat + 0.0001, lng: this.yourlng = this.yourlng+0.0001 },
            icon: this.iconBase
          });
          this.RemoveAllMarkers();
          marker.setMap(this.map);
          this.markers.push(marker);
          let request = {
            latLng: latlng
          };
          geocoder.geocode(request, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0] != null) {
                this.ngZone.run(() => { this.yourAddress = results[0].formatted_address });
              } else {
                alert("No address available");
              }
            }
          });
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

}
