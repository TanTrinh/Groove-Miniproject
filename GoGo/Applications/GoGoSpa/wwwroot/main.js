(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _problem_problem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./problem/problem.component */ "./src/app/problem/problem.component.ts");
/* harmony import */ var _trafficjam_trafficjam_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trafficjam/trafficjam.component */ "./src/app/trafficjam/trafficjam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], children: [{
                path: 'request', component: _request_request_component__WEBPACK_IMPORTED_MODULE_3__["RequestComponent"], children: [
                    { path: 'detail', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] },
                    { path: 'problem', component: _problem_problem_component__WEBPACK_IMPORTED_MODULE_5__["ProblemComponent"] },
                    { path: 'trafficjam', component: _trafficjam_trafficjam_component__WEBPACK_IMPORTED_MODULE_6__["TrafficjamComponent"] }
                ]
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/navigation/navigation.component */ "./src/app/layout/navigation/navigation.component.ts");
/* harmony import */ var _ggmap_ggmap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ggmap/ggmap.component */ "./src/app/ggmap/ggmap.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(agm_direction__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
/* harmony import */ var _problem_problem_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./problem/problem.component */ "./src/app/problem/problem.component.ts");
/* harmony import */ var _trafficjam_trafficjam_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trafficjam/trafficjam.component */ "./src/app/trafficjam/trafficjam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _ggmap_ggmap_component__WEBPACK_IMPORTED_MODULE_10__["GgmapComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"],
                _request_request_component__WEBPACK_IMPORTED_MODULE_14__["RequestComponent"],
                _problem_problem_component__WEBPACK_IMPORTED_MODULE_15__["ProblemComponent"],
                _trafficjam_trafficjam_component__WEBPACK_IMPORTED_MODULE_16__["TrafficjamComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_12__["AgmDirectionModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container detail\">\r\n  <table class=\"table table-hover\">\r\n    <tbody>\r\n      <tr>\r\n        <td>Code request</td>\r\n        <td>150620181320GG1</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Request quality</td>\r\n        <td>4</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Name receive</td>\r\n        <td>Đoàn Quang Đức</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Phone number</td>\r\n        <td>0909090909</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/detail/detail.component.scss":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n  margin-top: 10px; }\n\n.table {\n  border-bottom-color: #0073e6; }\n"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/detail/detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/ggmap/ggmap.component.html":
/*!********************************************!*\
  !*** ./src/app/ggmap/ggmap.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div id=\"directions-panel\"></div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <div id=\"map\"></div>\r\n  </div>\r\n</div>-->\r\n\r\n<div id=\"map\"></div>\r\n"

/***/ }),

/***/ "./src/app/ggmap/ggmap.component.scss":
/*!********************************************!*\
  !*** ./src/app/ggmap/ggmap.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-left: 10px;\n  margin-top: 5px; }\n\n#map {\n  height: 960px; }\n\n.map {\n  height: 100%; }\n\n.location {\n  border-bottom-color: darkorange; }\n"

/***/ }),

/***/ "./src/app/ggmap/ggmap.component.ts":
/*!******************************************!*\
  !*** ./src/app/ggmap/ggmap.component.ts ***!
  \******************************************/
/*! exports provided: GgmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GgmapComponent", function() { return GgmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GgmapComponent = /** @class */ (function () {
    function GgmapComponent(ngZone) {
        this.ngZone = ngZone;
        //parameter 
        //parameter of map
        this.latcenter = 10.7711799;
        this.lngcenter = 106.7004174;
        this.zoom = 15;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        //The array of waypoints
        this.checkboxArray = [
            'benthanhmarket',
            { lat: 10.7711899, lng: 106.7304174 },
            'dai hoc khoa hoc tu nhien'
        ];
        this.iconWarehouse = '../assets/warehouse.png';
        this.iconBase = '../assets/trucking.png';
    }
    GgmapComponent.prototype.ngOnInit = function () {
        this.GetYourPosition();
        this.InitMap(this.latcenter, this.lngcenter);
        this.latlngOrigin = this.GetLatlng(10.7711799, 106.7004174);
        this.latlngDestination = this.GetLatlng(10.803780, 106.694184);
        this.CalculateAndDisplayRoute(this.directionsService, this.directionsDisplay, this.latlngOrigin, this.latlngDestination, this.checkboxArray);
    };
    //Init the map
    GgmapComponent.prototype.InitMap = function (latitude, longitude) {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: this.zoom,
            center: { lat: latitude, lng: longitude },
            scrollwheel: true,
            zoomControl: true
        });
        this.directionsDisplay.setMap(this.map);
    };
    //Optimize the route and show
    //Input:
    //start point: originLocation || end point: destinationLocation
    //checkboxArray: the array of detination
    GgmapComponent.prototype.CalculateAndDisplayRoute = function (directionsService, directionsDisplay, originLocation, destinationLocation, checkboxArray) {
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
    };
    //Convert the address to the latitude and longitude
    GgmapComponent.prototype.Geocoding = function (address) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                var latlng = new google.maps.LatLng(latitude, longitude);
                return latlng;
            }
        });
    };
    //Get your position
    //Add the marker where you are
    //Address of where you are
    GgmapComponent.prototype.GetYourPosition = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.yourlat = position.coords.latitude;
                _this.yourlng = position.coords.longitude;
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(_this.yourlat, _this.yourlng);
                var marker = new google.maps.Marker({
                    position: { lat: _this.yourlat, lng: _this.yourlng },
                    icon: _this.iconBase
                });
                marker.setMap(_this.map);
                var request = {
                    latLng: latlng
                };
                geocoder.geocode(request, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0] != null) {
                            _this.ngZone.run(function () { _this.yourAddress = results[0].formatted_address; });
                        }
                        else {
                            alert("No address available");
                        }
                    }
                });
            }, function (error) {
                console.log("Error code: " + error.code + "<br /> Error message: " + error.message);
            });
        }
    };
    //Get the Latlng
    GgmapComponent.prototype.GetLatlng = function (latitude, longitude) {
        var latlng = new google.maps.LatLng(latitude, longitude);
        return latlng;
    };
    GgmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ggmap',
            template: __webpack_require__(/*! ./ggmap.component.html */ "./src/app/ggmap/ggmap.component.html"),
            styles: [__webpack_require__(/*! ./ggmap.component.scss */ "./src/app/ggmap/ggmap.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], GgmapComponent);
    return GgmapComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  footer works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  background-color: black; }\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md row\" id=\"narbar\">\r\n  <a class=\"navbar-brand\" id=\"brand\">\r\n    <h2>GoGo</h2>\r\n  </a>\r\n  <a id=\"toggleButton\" class=\"navbar-toggler \" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    Menu\r\n  </a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav\">\r\n      <!-- This menu is hidden in bigger devices with d-sm-none.\r\n           The sidebar isn't proper for smaller screens imo, so this dropdown menu can keep all the useful sidebar itens exclusively for smaller screens  -->\r\n      <li class=\"nav-item dropdown d-sm-block d-md-none\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"smallerscreenmenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n          List\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"smallerscreenmenu\" id=\"smallMenu\">\r\n          <a class=\"dropdown-item\" href=\"#\">Dashboard</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Profile</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Tasks</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Etc ...</a>\r\n        </div>\r\n      </li><!-- Smaller devices menu END -->\r\n    </ul>\r\n  </div>\r\n  <div class=\"btn-group\">\r\n    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\r\n      Account\r\n    </button>\r\n    <div class=\"dropdown-menu dropdown-menu-right\" id=\"AccountDropdown\">\r\n      <a class=\"dropdown-item\" routerLink=\"/profile\">Profile</a>\r\n      <div class=\"dropdown-divider\"></div>\r\n      <a class=\"dropdown-item\">Logout</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  navbar */\n#narbar {\n  color: #0073e6;\n  background-color: #0059b3; }\n/*  navbar item */\n#narbar a {\n  color: white; }\n#narbar a:hover {\n  color: white; }\n#smallMenu a {\n  color: black; }\n#AccountDropdown a {\n  color: #0073e6; }\n#AccountDropdown a:hover {\n  color: white;\n  background-color: #0073e6; }\n/*  navbar submenu item*/\n#smallMenu a:hover {\n  color: #0073e6; }\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid clearfix\">\r\n  <app-header></app-header>\r\n  <div class=\"row\" id=\"body-row\">\r\n    <app-navigation></app-navigation>\r\n    <main class=\"main-section col\">\r\n      <!--BODY BEGIN-->\r\n      <router-outlet></router-outlet>\r\n\r\n      <!--BODY END-->\r\n\r\n    </main>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router) {
        this.router = router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.router.navigate(['./request/detail']);
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-container\" class=\"sidebar-expanded d-none d-md-block \">\r\n  <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->\r\n  <!-- Bootstrap List Group -->\r\n  <ul class=\"list-group \" id=\"menu\">\r\n    <!--Menu with submenu\r\n    <li>\r\n      <a href=\"#submenu1\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\" list-group-item list-group-item-action flex-column align-items-start\">\r\n        Dashboard\r\n      </a>\r\n      <div id='submenu1' class=\"collapse sidebar-submenu\">\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          1. Charts\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          2. Reports\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          3. Tables\r\n        </a>\r\n      </div>\r\n    </li>-->\r\n    <li>\r\n      <a routerLink=\"/request/detail\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Request</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/warehouse\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Warehouse</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/delivery-status\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Delivery Status</a>\r\n    </li>\r\n  </ul><!-- List Group END-->\r\n</div><!-- sidebar-container END -->\r\n"

/***/ }),

/***/ "./src/app/layout/navigation/navigation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/navigation/navigation.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Sidebar */\n#sidebar-container {\n  min-height: 100vh;\n  background-color: #e6e6ff;\n  padding: 0;\n  font-weight: 500; }\n/* Sidebar item*/\n#sidebar-container .list-group a {\n  height: 50px;\n  background-color: #e6e6ff;\n  padding-left: 30px; }\n#sidebar-container .list-group a.hold {\n  background-color: white;\n  color: #0073e6;\n  font-weight: 500;\n  border-bottom: solid;\n  border-bottom-color: #0073e6; }\n#sidebar-container .list-group a:hover {\n  height: 50px;\n  background-color: white;\n  color: #0073e6;\n  font-weight: 500; }\n#sidebar-container .list-group a:focus {\n  height: 50px;\n  background-color: white;\n  color: #0073e6;\n  font-weight: 500;\n  border-bottom: solid;\n  border-bottom-color: #0073e6; }\n"

/***/ }),

/***/ "./src/app/layout/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/layout/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/layout/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/problem/problem.component.html":
/*!************************************************!*\
  !*** ./src/app/problem/problem.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container problem\">\r\n  <div class=\"row\">\r\n    <img src=\"../../assets/sick.svg\" width=\"90\" height=\"90\" />\r\n    <img src=\"../../assets/broken.svg\" width=\"90\" height=\"90\" />\r\n    <img src=\"../../assets/crash.svg\" width=\"90\" height=\"90\" />\r\n    <img src=\"../../assets/police.svg\" width=\"90\" height=\"90\" />\r\n\r\n  </div>\r\n  <label id=\"tille\">Your problem:</label><br />\r\n  <input class=\"form-control\" placeholder=\"Your problem\" />\r\n\r\n\r\n  <a class=\"btn btn-danger\">Send message</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/problem/problem.component.scss":
/*!************************************************!*\
  !*** ./src/app/problem/problem.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".problem {\n  background-color: #ffe6e6; }\n\n#tille {\n  color: red; }\n\ninput {\n  border-color: red; }\n\nimg {\n  margin-top: 5px;\n  margin-left: 5px;\n  border: 0px; }\n\na {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: #ff8080;\n  color: white; }\n\n#only {\n  position: absolute;\n  top: 80px;\n  right: 0;\n  width: 200px;\n  height: 100px; }\n"

/***/ }),

/***/ "./src/app/problem/problem.component.ts":
/*!**********************************************!*\
  !*** ./src/app/problem/problem.component.ts ***!
  \**********************************************/
/*! exports provided: ProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemComponent", function() { return ProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProblemComponent = /** @class */ (function () {
    function ProblemComponent() {
    }
    ProblemComponent.prototype.ngOnInit = function () {
    };
    ProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem',
            template: __webpack_require__(/*! ./problem.component.html */ "./src/app/problem/problem.component.html"),
            styles: [__webpack_require__(/*! ./problem.component.scss */ "./src/app/problem/problem.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProblemComponent);
    return ProblemComponent;
}());



/***/ }),

/***/ "./src/app/request/request.component.html":
/*!************************************************!*\
  !*** ./src/app/request/request.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-md-3\">\r\n    <div class=\"tille\">\r\n      <span id=\"header\">REQUEST</span>\r\n      <img src=\"../../assets/support.svg\" class=\"rounded-circle float-right\" id=\"support\" width=\"60\" height=\"60\" />\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <input type=\"text\" class=\"form-control-plaintext yourAddress\" readonly value=\"132 Hàm Nghi, Phường Bến Thành, Quận 1, Hồ Chí Minh, Vietnam\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-12\">\r\n        <input type=\"text\" class=\"form-control-plaintext nextAddress\" readonly value=\"132 Hoàng Văn Thụ, Phường 9, Phú Nhuận, Hồ Chí Minh, Vietnam\">\r\n      </div>\r\n    </div>\r\n    <button class=\"btn btn-success btn-block\" id=\"completed\">Completed the request</button>\r\n\r\n    <div id=\"inf\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link \" routerLink=\"./detail\" routerLinkActive=\"hold\" id=\"detail\">Request detail</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\"  routerLink=\"./problem\" routerLinkActive=\"hold\" id=\"problem\">Have problem</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"./trafficjam\" routerLinkActive=\"hold\" id=\"trafficjam\">Alert traffic</a>\r\n        </li>\r\n      </ul>\r\n      <div id=\"router\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n    <div class=\"coordinator\">\r\n      \r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <app-ggmap></app-ggmap>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/request/request.component.scss":
/*!************************************************!*\
  !*** ./src/app/request/request.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-top: 5px;\n  margin-right: 2px; }\n\n.tille {\n  text-align: center; }\n\n#header {\n  font-size: 40px;\n  color: #0073e6; }\n\n.yourAddress {\n  border-bottom: 1px solid #0073e6;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 52 52%22 style%3D%22enable-background%3Anew 0 0 52 52%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cpath style%3D%22fill%3A%231081E0%3B%22 d%3D%22M38.853%2C5.324L38.853%2C5.324c-7.098-7.098-18.607-7.098-25.706%2C0h0%0D%09C6.751%2C11.72%2C6.031%2C23.763%2C11.459%2C31L26%2C52l14.541-21C45.969%2C23.763%2C45.249%2C11.72%2C38.853%2C5.324z M26.177%2C24c-3.314%2C0-6-2.686-6-6%0D%09s2.686-6%2C6-6s6%2C2.686%2C6%2C6S29.491%2C24%2C26.177%2C24z%22%2F%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\n  background-repeat: no-repeat;\n  padding-left: 48px; }\n\n.nextAddress {\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 512 512%22 style%3D%22enable-background%3Anew 0 0 512 512%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cpolygon style%3D%22fill%3A%234398D1%3B%22 points%3D%22256%2C8.509 8.533%2C145.042 8.533%2C503.442 51.2%2C503.442 51.2%2C196.242 460.8%2C196.242 %0D%09460.8%2C503.442 503.467%2C503.442 503.467%2C153.575 %22%2F%3E%0D%3Cg%3E%0D%09%3Cpath style%3D%22fill%3A%233E8CC7%3B%22 d%3D%22M460.8%2C503.442h42.667V226.45c-14.054%2C9.899-28.271%2C19.371-42.667%2C28.416V503.442z%22%2F%3E%0D%09%3Cpath style%3D%22fill%3A%233E8CC7%3B%22 d%3D%22M8.533%2C503.442H51.2v-79.275c-14.677%2C3.584-28.902%2C6.827-42.667%2C9.728V503.442z%22%2F%3E%0D%3C%2Fg%3E%0D%3Crect x%3D%2251.2%22 y%3D%22196.242%22 style%3D%22fill%3A%23E5E5E5%3B%22 width%3D%22409.6%22 height%3D%2268.267%22%2F%3E%0D%3Crect x%3D%2251.2%22 y%3D%22221.842%22 style%3D%22fill%3A%23CFCFCF%3B%22 width%3D%22409.6%22 height%3D%2217.067%22%2F%3E%0D%3Crect x%3D%22213.333%22 y%3D%22127.975%22 style%3D%22fill%3A%23E5E5E5%3B%22 width%3D%2285.333%22 height%3D%2234.133%22%2F%3E%0D%3Crect x%3D%22324.267%22 y%3D%22298.642%22 style%3D%22fill%3A%23FDB62F%3B%22 width%3D%22102.4%22 height%3D%22102.4%22%2F%3E%0D%3Crect x%3D%22358.4%22 y%3D%22298.642%22 style%3D%22fill%3A%23FD7B2F%3B%22 width%3D%2234.133%22 height%3D%2234.133%22%2F%3E%0D%3Cpath style%3D%22fill%3A%23FFA230%3B%22 d%3D%22M324.267%2C401.042h102.4v-69.035c-29.44%2C24.704-64.674%2C41.532-102.4%2C48.896V401.042z%22%2F%3E%0D%3Crect x%3D%22324.267%22 y%3D%22401.042%22 style%3D%22fill%3A%23FDB62F%3B%22 width%3D%22102.4%22 height%3D%22102.4%22%2F%3E%0D%3Crect x%3D%22358.4%22 y%3D%22401.042%22 style%3D%22fill%3A%23FD7B2F%3B%22 width%3D%2234.133%22 height%3D%2234.133%22%2F%3E%0D%3Cpath style%3D%22fill%3A%23FFA230%3B%22 d%3D%22M324.267%2C503.442h102.4v-69.035c-29.44%2C24.704-64.674%2C41.532-102.4%2C48.896V503.442z%22%2F%3E%0D%3Crect x%3D%22221.867%22 y%3D%22401.042%22 style%3D%22fill%3A%23FDB62F%3B%22 width%3D%22102.4%22 height%3D%22102.4%22%2F%3E%0D%3Crect x%3D%22256%22 y%3D%22401.042%22 style%3D%22fill%3A%23FD7B2F%3B%22 width%3D%2234.133%22 height%3D%2234.133%22%2F%3E%0D%3Cpath style%3D%22fill%3A%23FFA230%3B%22 d%3D%22M221.867%2C503.442h102.4v-69.035c-29.44%2C24.704-64.674%2C41.532-102.4%2C48.896V503.442z%22%2F%3E%0D%3Crect x%3D%22213.333%22 y%3D%22162.109%22 style%3D%22fill%3A%233E8CC7%3B%22 width%3D%2285.333%22 height%3D%2217.067%22%2F%3E%0D%3Cpath d%3D%22M507.819%2C146.237L260.352%2C1.17c-2.637-1.527-5.897-1.527-8.533%2C0L4.352%2C137.703c-2.654%2C1.493-4.318%2C4.292-4.352%2C7.339v358.4%0D%09c0%2C4.71%2C3.823%2C8.533%2C8.533%2C8.533H51.2c4.71%2C0%2C8.533-3.823%2C8.533-8.533v-230.4h392.533v230.4c0%2C4.71%2C3.823%2C8.533%2C8.533%2C8.533h42.667%0D%09c4.71%2C0%2C8.533-3.823%2C8.533-8.533V153.575C512%2C150.563%2C510.413%2C147.773%2C507.819%2C146.237z M452.267%2C221.842H59.733v-17.067h392.533%0D%09V221.842z M59.733%2C255.975v-17.067h392.533v17.067H59.733z M494.933%2C494.909h-25.6V196.242c0-4.71-3.823-8.533-8.533-8.533H51.2%0D%09c-4.71%2C0-8.533%2C3.823-8.533%2C8.533v298.667h-25.6V150.077L256%2C18.322l238.933%2C140.117V494.909z%22%2F%3E%0D%3Cpath d%3D%22M324.267%2C511.975h102.4c4.71%2C0%2C8.533-3.823%2C8.533-8.533v-204.8c0-4.71-3.823-8.533-8.533-8.533h-102.4%0D%09c-4.71%2C0-8.533%2C3.823-8.533%2C8.533v93.867h-93.867c-4.71%2C0-8.533%2C3.823-8.533%2C8.533v102.4c0%2C4.71%2C3.823%2C8.533%2C8.533%2C8.533H324.267z%0D%09 M418.133%2C494.909H332.8v-85.333h17.067v25.6c0%2C4.71%2C3.823%2C8.533%2C8.533%2C8.533h34.133c4.71%2C0%2C8.533-3.823%2C8.533-8.533v-25.6h17.067%0D%09V494.909z M366.933%2C409.576H384v17.067h-17.067V409.576z M366.933%2C307.176H384v17.067h-17.067V307.176z M332.8%2C307.176h17.067v25.6%0D%09c0%2C4.71%2C3.823%2C8.533%2C8.533%2C8.533h34.133c4.71%2C0%2C8.533-3.823%2C8.533-8.533v-25.6h17.067v85.333H332.8V307.176z M264.533%2C409.576H281.6%0D%09v17.067h-17.067V409.576z M230.4%2C409.576h17.067v25.6c0%2C4.71%2C3.823%2C8.533%2C8.533%2C8.533h34.133c4.71%2C0%2C8.533-3.823%2C8.533-8.533v-25.6%0D%09h17.067v85.333H230.4V409.576z%22%2F%3E%0D%3Cpath d%3D%22M204.8%2C127.975v34.133c0%2C4.71%2C3.823%2C8.533%2C8.533%2C8.533h85.333c4.71%2C0%2C8.533-3.823%2C8.533-8.533v-34.133%0D%09c0-4.71-3.823-8.533-8.533-8.533h-85.333C208.623%2C119.442%2C204.8%2C123.265%2C204.8%2C127.975z M221.867%2C136.509h68.267v17.067h-68.267%0D%09V136.509z%22%2F%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\n  background-repeat: no-repeat;\n  padding-left: 48px; }\n\n#tracffic {\n  border: 10px; }\n\n#noti {\n  border: 3px; }\n\n#inf {\n  margin-top: 10px;\n  border: 1px solid #0073e6; }\n\n.nav {\n  border-bottom: 1px solid #0073e6;\n  color: black; }\n\n.nav-item a.hold {\n  background-color: #e6e6ff;\n  color: #0073e6;\n  font-weight: 500;\n  border-bottom: solid;\n  border-bottom-color: #0073e6; }\n\n/* Sidebar */\n\n#sidebar-container {\n  margin-top: 10px;\n  min-height: 460px;\n  padding: 0;\n  border-bottom-color: #0073e6;\n  font-weight: 500; }\n\n#support {\n  border: 2px solid #55E0DE;\n  background-color: #e6e6ff;\n  margin-top: 1px; }\n"

/***/ }),

/***/ "./src/app/request/request.component.ts":
/*!**********************************************!*\
  !*** ./src/app/request/request.component.ts ***!
  \**********************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestComponent = /** @class */ (function () {
    function RequestComponent(router) {
        this.router = router;
    }
    RequestComponent.prototype.ngOnInit = function () {
        // this.router.navigate(['./request/detail']);
    };
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.scss */ "./src/app/request/request.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/trafficjam/trafficjam.component.html":
/*!******************************************************!*\
  !*** ./src/app/trafficjam/trafficjam.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p>Level of traffic jam:</p>\r\n  <img src=\"../../assets/1.svg\" width=\"90\" height=\"90\" />\r\n  <img src=\"../../assets/2.svg\" width=\"90\" height=\"90\" />\r\n  <img src=\"../../assets/3.svg\" width=\"90\" height=\"90\" />\r\n  <img src=\"../../assets/4.svg\" width=\"90\" height=\"90\" />\r\n\r\n  <input class=\"form-control\" placeholder=\"Enter the reason if you want\" />\r\n\r\n  <button class=\"btn btn-warning btn-block\" id=\"completed\">Send alert</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trafficjam/trafficjam.component.scss":
/*!******************************************************!*\
  !*** ./src/app/trafficjam/trafficjam.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  border: 0px; }\n\np {\n  margin-top: 5px;\n  font-size: 18px;\n  font-weight: 500; }\n\n.btn {\n  margin-top: 5px;\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/trafficjam/trafficjam.component.ts":
/*!****************************************************!*\
  !*** ./src/app/trafficjam/trafficjam.component.ts ***!
  \****************************************************/
/*! exports provided: TrafficjamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficjamComponent", function() { return TrafficjamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrafficjamComponent = /** @class */ (function () {
    function TrafficjamComponent() {
    }
    TrafficjamComponent.prototype.ngOnInit = function () {
    };
    TrafficjamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trafficjam',
            template: __webpack_require__(/*! ./trafficjam.component.html */ "./src/app/trafficjam/trafficjam.component.html"),
            styles: [__webpack_require__(/*! ./trafficjam.component.scss */ "./src/app/trafficjam/trafficjam.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrafficjamComponent);
    return TrafficjamComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\intern01\GG\GoGo\Applications\GoGoSpa\Client-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map