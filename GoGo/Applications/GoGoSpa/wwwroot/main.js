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
/* harmony import */ var _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/account/login/login.component */ "./src/app/modules/account/login/login.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shipment_ShipmentAssigned_assigned_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipment/ShipmentAssigned/assigned.component */ "./src/app/shipment/ShipmentAssigned/assigned.component.ts");
/* harmony import */ var _shipment_shipment_picking_shipment_picking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipment/shipment-picking/shipment-picking.component */ "./src/app/shipment/shipment-picking/shipment-picking.component.ts");
/* harmony import */ var _request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request/request-list/request-list.component */ "./src/app/request/request-list/request-list.component.ts");
/* harmony import */ var _request_current_request_current_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request/current-request/current-request.component */ "./src/app/request/current-request/current-request.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'layout', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"] },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], children: [
            { path: 'assigned', component: _shipment_ShipmentAssigned_assigned_component__WEBPACK_IMPORTED_MODULE_5__["AssignedComponent"] },
            {
                path: 'shipmentPicking/:code', component: _shipment_shipment_picking_shipment_picking_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentPickingComponent"], children: [
                    { path: 'request/:code', component: _request_current_request_current_request_component__WEBPACK_IMPORTED_MODULE_8__["CurrentRequestComponent"] },
                    { path: 'list', component: _request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_7__["RequestListComponent"] }
                ]
            }
        ]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/navigation/navigation.component */ "./src/app/layout/navigation/navigation.component.ts");
/* harmony import */ var _ggmap_ggmap_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ggmap/ggmap.component */ "./src/app/ggmap/ggmap.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(agm_direction__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/account/login/login.component */ "./src/app/modules/account/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/components/dialog/notification.service */ "./src/app/shared/components/dialog/notification.service.ts");
/* harmony import */ var _shipment_ShipmentAssigned_assigned_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shipment/ShipmentAssigned/assigned.component */ "./src/app/shipment/ShipmentAssigned/assigned.component.ts");
/* harmony import */ var _shipment_shipment_picking_shipment_picking_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shipment/shipment-picking/shipment-picking.component */ "./src/app/shipment/shipment-picking/shipment-picking.component.ts");
/* harmony import */ var _request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./request/request-list/request-list.component */ "./src/app/request/request-list/request-list.component.ts");
/* harmony import */ var _request_request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./request/request-detail/request-detail.component */ "./src/app/request/request-detail/request-detail.component.ts");
/* harmony import */ var _shared_service_save_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/service/save.service */ "./src/app/shared/service/save.service.ts");
/* harmony import */ var _request_current_request_current_request_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./request/current-request/current-request.component */ "./src/app/request/current-request/current-request.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _ggmap_ggmap_component__WEBPACK_IMPORTED_MODULE_11__["GgmapComponent"],
                _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _shipment_ShipmentAssigned_assigned_component__WEBPACK_IMPORTED_MODULE_17__["AssignedComponent"],
                _shipment_shipment_picking_shipment_picking_component__WEBPACK_IMPORTED_MODULE_18__["ShipmentPickingComponent"],
                _request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_19__["RequestListComponent"],
                _request_request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_20__["RequestDetailComponent"],
                _request_current_request_current_request_component__WEBPACK_IMPORTED_MODULE_22__["CurrentRequestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_13__["AgmDirectionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [
                src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"],
                _shared_service_save_service__WEBPACK_IMPORTED_MODULE_21__["SaveService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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

/***/ "./src/app/ggmap/ggmap.component.html":
/*!********************************************!*\
  !*** ./src/app/ggmap/ggmap.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div id=\"directions-panel\"></div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <div id=\"map\"></div>\r\n  </div>\r\n</div>-->\r\n\r\n<div id=\"map\"></div>\r\n{{marker}}\r\n"

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
/* harmony import */ var _shipment_shipment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shipment/shipment.service */ "./src/app/shipment/shipment.service.ts");
/* harmony import */ var _shared_service_save_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/save.service */ "./src/app/shared/service/save.service.ts");
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
    function GgmapComponent(ngZone, shipmentService, saveService) {
        this.ngZone = ngZone;
        this.shipmentService = shipmentService;
        this.saveService = saveService;
        this.Waypts = [];
        //  @Input('Markers') Markers: any[] = [];
        //parameter 
        //parameter of map
        this.latcenter = 10.7711799;
        this.lngcenter = 106.7004174;
        this.zoom = 15;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        this.oldMarkerOrigin = new google.maps.Marker();
        this.yourlat = 10.7725133;
        this.yourlng = 106.70578479999999;
        //The array of waypoints
        this.optimizeRequest = [];
        this.iconNext = '../assets/location.png';
        this.iconBase = '../assets/trucking.png';
        this.iconWarehouse = '../assets/warehouse2.png';
    }
    GgmapComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { _this.GetYourPosition(); }, 5000);
        this.InitMap(this.latcenter, this.lngcenter);
        this.latlngDestination = this.GetLatlng(10.803780, 106.694184);
        setInterval(function () {
            setTimeout(function () { _this.CalculateAndDisplayRoute(_this.directionsService, _this.directionsDisplay); }, 5000);
        }, 3000);
        //setTimeout(() => { this.DrawMarkers() }, 1000)
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
    GgmapComponent.prototype.DrawMarkers = function () {
        var index;
        for (index = 0; index < this.Waypts.length; index++) {
            var contentString = "<p>" + this.Waypts[index].code + "</p>";
            var infoWindow = new google.maps.InfoWindow();
            var m = new google.maps.Marker({
                position: this.Waypts[index].latlng,
                icon: this.iconNext,
                map: this.map,
            });
            m.setMap(this.map);
            if (index == 0) {
                if (this.Waypts[index].code == "This is location picking") {
                    m.setIcon(this.iconWarehouse);
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
    };
    GgmapComponent.prototype.RefeshMarker = function (markers) {
        console.log(markers.length);
        for (var i = 0; i < markers.length; i++)
            markers[i].setMap(null);
    };
    //Optimize the route and show
    //Input:
    //start point: originLocation || end point: destinationLocation
    //checkboxArray: the array of detination
    GgmapComponent.prototype.CalculateAndDisplayRoute = function (directionsService, directionsDisplay) {
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
            if (index < (this.Waypts.length - 1) && this.Waypts[index].status != 'unActive') {
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
    };
    GgmapComponent.prototype.openInfoWindow = function (marker, data, infoWindow) {
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.setContent("<div style = 'width:150px;min-height:10px;color:blue;text-align:center'>" + data + "</div>");
            infoWindow.open(this.map, marker);
        });
    };
    GgmapComponent.prototype.closeInfoWindow = function (marker, data, infoWindow) {
        google.maps.event.addListener(marker, 'mouseout', function () {
            infoWindow.close(this.map, marker);
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
    GgmapComponent.prototype.RemoveAllMarkers = function () {
        //for (var i = 0; i < this.markers.length; i++) {
        //  this.markers[i].setMap(null);
        //}
    };
    //Get your position
    //Add the marker where you are
    //Address of where you are
    GgmapComponent.prototype.GetYourPosition = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                //this.yourlat = position.coords.latitude;
                //this.yourlng = position.coords.longitude;
                _this.yourlat = _this.yourlat + 0.0001;
                _this.yourlng = _this.yourlng + 0.0001;
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(_this.yourlat, _this.yourlng);
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
    GgmapComponent.prototype.GetMarker = function (latitue, longitude, urlIcon, map) {
        var marker = new google.maps.Marker({
            position: this.GetLatlng(latitue, longitude),
            icon: this.iconWarehouse,
            map: map
        });
        return marker;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('marker'),
        __metadata("design:type", String)
    ], GgmapComponent.prototype, "marker", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('Origin'),
        __metadata("design:type", Object)
    ], GgmapComponent.prototype, "Origin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('Destination'),
        __metadata("design:type", Object)
    ], GgmapComponent.prototype, "Destination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('Waypts'),
        __metadata("design:type", Array)
    ], GgmapComponent.prototype, "Waypts", void 0);
    GgmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ggmap',
            template: __webpack_require__(/*! ./ggmap.component.html */ "./src/app/ggmap/ggmap.component.html"),
            styles: [__webpack_require__(/*! ./ggmap.component.scss */ "./src/app/ggmap/ggmap.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _shipment_shipment_service__WEBPACK_IMPORTED_MODULE_1__["ShipmentService"],
            _shared_service_save_service__WEBPACK_IMPORTED_MODULE_2__["SaveService"]])
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

module.exports = "<div class=\"container-fluid clearfix\">\r\n    <app-header></app-header>\r\n    <div class=\"row\" id=\"body-row\">\r\n        <app-navigation></app-navigation>\r\n        <main class=\"main-section col\">\r\n            <!--BODY BEGIN-->\r\n            <router-outlet></router-outlet>\r\n            <!--BODY END-->\r\n        </main>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

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

module.exports = "<nav class=\"navbar navbar-expand-md row\" id=\"narbar\">\r\n  <a class=\"navbar-brand\" id=\"brand\">\r\n    <h2>GoGo</h2>\r\n  </a>\r\n  <a id=\"toggleButton\" class=\"navbar-toggler \" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    Menu\r\n  </a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav\">\r\n      <!-- This menu is hidden in bigger devices with d-sm-none.\r\n           The sidebar isn't proper for smaller screens imo, so this dropdown menu can keep all the useful sidebar itens exclusively for smaller screens  -->\r\n      <li class=\"nav-item dropdown d-sm-block d-md-none\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"smallerscreenmenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n          List\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"smallerscreenmenu\" id=\"smallMenu\">\r\n          <a class=\"dropdown-item\" href=\"#\">Dashboard</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Profile</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Tasks</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Etc ...</a>\r\n        </div>\r\n      </li><!-- Smaller devices menu END -->\r\n    </ul>\r\n  </div>\r\n  <div class=\"btn-group\">\r\n    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\r\n      Account\r\n    </button>\r\n    <div class=\"dropdown-menu dropdown-menu-right\" id=\"AccountDropdown\">\r\n      <a class=\"dropdown-item\" routerLink=\"/profile\">Profile</a>\r\n      <div class=\"dropdown-divider\"></div>\r\n      <a class=\"dropdown-item\" (click)=\"logOut()\">Logout</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logOut = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
        this.router.navigate(['./assigned']);
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

module.exports = "<div id=\"sidebar-container\" class=\"sidebar-expanded d-none d-md-block \">\r\n  <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->\r\n  <!-- Bootstrap List Group -->\r\n  <ul class=\"list-group \" id=\"menu\">\r\n    <!--Menu with submenu\r\n    <li>\r\n      <a href=\"#submenu1\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\" list-group-item list-group-item-action flex-column align-items-start\">\r\n        Dashboard\r\n      </a>\r\n      <div id='submenu1' class=\"collapse sidebar-submenu\">\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          1. Charts\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          2. Reports\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          3. Tables\r\n        </a>\r\n      </div>\r\n    </li>-->\r\n    <li>\r\n      <a routerLink=\"/home/assigned\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Assigned</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/warehouse\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Warehouse</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/delivery-status\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Delivery Status</a>\r\n    </li>\r\n  </ul><!-- List Group END-->\r\n</div><!-- sidebar-container END -->\r\n"

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

/***/ "./src/app/modules/account/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/account/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-form\">\r\n    <div class=\"centered-form__form\">\r\n        <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" name=\"myForm\">\r\n            <div class=\"form-field\">\r\n                <h1>GoGo</h1>\r\n            </div>\r\n            <hr />\r\n            <div class=\"form-field\">\r\n                <h3>Login</h3>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <label for=\"username\">Username:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"model.username\" name=\"username\" #username=\"ngModel\" autofocus>\r\n                <!--<validation for=\"username\" ></validation>-->\r\n                <div id=\"val-user\" style=\"visibility:hidden\">\r\n                    <p style=\"color:red\">\r\n                        Username is required.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <label for=\"pwd\">Password:</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" [(ngModel)]=\"model.password\" name=\"password\" #password=\"ngModel\">\r\n                <div id=\"val-pass\" style=\"visibility:hidden\">\r\n                    <p style=\"color:red\">\r\n                        Password is required.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <ul class=\"pagination\">\r\n                    <li>\r\n                        <label><input type=\"checkbox\"> Remember me</label>\r\n                    </li>\r\n                    <li>\r\n                        <a id=\"forgot\" href=\"#\">Forgot password?</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <button type=\"submit\" class=\"btn btn-primary active\">Sign In <i class=\"fas fa-sign-in-alt\"></i></button>\r\n                <div id=\"check-valid\" style=\"visibility:hidden\">\r\n                    <p style=\"color:red\">\r\n                        {{message}}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/account/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/account/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-form {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  /*background: url(https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df15ce8f5d3c650a1f5507b2f6603841&auto=format&fit=crop&w=1355&q=80);*/\n  background: url(\"/assets/pictures/photo-1519003722824-194d4455a60c.jpeg\");\n  background-size: cover;\n  background-position: center; }\n\n.centered-form__form {\n  background: rgba(250, 250, 250, 0.9);\n  border: 1px solid #e1e1e1;\n  border-radius: 5px;\n  padding: 0px 20px;\n  margin: 20px;\n  height: 540px;\n  width: 400px; }\n\nh1 {\n  font-weight: 600;\n  text-align: center;\n  font-size: 2.0rem;\n  color: #418cf4; }\n\nh3 {\n  font-weight: 600;\n  text-align: center;\n  font-size: 1.5rem; }\n\n#forgot {\n  margin-left: 105px; }\n\n.form-field {\n  margin: 20px 0 20px 0; }\n\n.form-field > * {\n  width: 100%; }\n\n.form-field label {\n  display: block;\n  margin-bottom: 7px; }\n\n.form-field input, .form-field select {\n  border: 1px solid #e1e1e1;\n  padding: 10px; }\n\nbutton {\n  margin: 15px 0; }\n"

/***/ }),

/***/ "./src/app/modules/account/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/account/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/dialog/notification.service */ "./src/app/shared/components/dialog/notification.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, _notificationService) {
        this.http = http;
        this.router = router;
        this._notificationService = _notificationService;
        this.message = null;
        this.model = {
            username: '',
            password: ''
        };
        this.isError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model);
        var valueUser = jquery__WEBPACK_IMPORTED_MODULE_4__["trim"](jquery__WEBPACK_IMPORTED_MODULE_4__("#username").val());
        var valuePass = jquery__WEBPACK_IMPORTED_MODULE_4__["trim"](jquery__WEBPACK_IMPORTED_MODULE_4__("#pwd").val());
        if (valueUser.length > 0 && valuePass.length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_4__("#val-user").attr('style', 'visibility: hidden');
            jquery__WEBPACK_IMPORTED_MODULE_4__("#val-pass").attr('style', 'visibility: hidden');
            this.http.post('http://localhost:62772/api/authentication/token', this.model, httpOptions).subscribe(function (result) {
                var key = "tokenKey";
                console.log(result);
                if (result) {
                    var keyValue = JSON.stringify(result);
                    localStorage.setItem(key, keyValue);
                    _this.router.navigate(['home']);
                }
            }, function (error) {
                jquery__WEBPACK_IMPORTED_MODULE_4__("#check-valid").removeAttr('style', 'visibility', 'hidden');
                _this.isError = true;
                var httpError = error;
                if (httpError.status === 400) {
                    _this.message = httpError.error.message;
                }
                else {
                    _this._notificationService.prompError(httpError.message);
                }
            });
        }
        else if (valueUser.length > 0 && valuePass.length == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_4__("#val-user").attr('style', 'visibility: hidden');
            jquery__WEBPACK_IMPORTED_MODULE_4__("#val-pass").removeAttr('style', 'visibility', 'hidden');
        }
        else if (valueUser.length == 0 && valuePass.length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_4__("#val-user").removeAttr('style', 'visibility', 'hidden');
            jquery__WEBPACK_IMPORTED_MODULE_4__("#val-pass").attr('style', 'visibility: hidden');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__("#val-user").removeAttr('style', 'visibility', 'hidden');
            jquery__WEBPACK_IMPORTED_MODULE_4__("#val-pass").removeAttr('style', 'visibility', 'hidden');
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/account/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/account/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/request/RequestDetail.ts":
/*!******************************************!*\
  !*** ./src/app/request/RequestDetail.ts ***!
  \******************************************/
/*! exports provided: RequestDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetail", function() { return RequestDetail; });
var RequestDetail = /** @class */ (function () {
    function RequestDetail() {
    }
    return RequestDetail;
}());



/***/ }),

/***/ "./src/app/request/current-request/current-request.component.html":
/*!************************************************************************!*\
  !*** ./src/app/request/current-request/current-request.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"request\">\r\n  <!--*ngIf=\"shipmentDetail.status != 'Completed' && shipmentDetail.status != 'Reject'\">-->\r\n  <table class=\"table table-hover\">\r\n    <tbody>\r\n      <tr>\r\n        <td>Request code</td>\r\n        <td>{{request.code}} <span class=\"badge badge-warning\">Not current</span></td>\r\n       \r\n      </tr>\r\n      <tr>\r\n        <td>Total Package</td>\r\n        <td>{{request.packageQuantity}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Estimate date</td>\r\n        <td>{{request.estimateDate | date:'short'}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Receiver</td>\r\n        <td>{{request.receiverName}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>PhoneNumber</td>\r\n        <td>{{request.receiverPhoneNumber}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Status</td>\r\n        <td>{{request.status}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/request/current-request/current-request.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/request/current-request/current-request.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/request/current-request/current-request.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/request/current-request/current-request.component.ts ***!
  \**********************************************************************/
/*! exports provided: CurrentRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentRequestComponent", function() { return CurrentRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _RequestDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RequestDetail */ "./src/app/request/RequestDetail.ts");
/* harmony import */ var _shipment_shipment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shipment/shipment.service */ "./src/app/shipment/shipment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CurrentRequestComponent = /** @class */ (function () {
    function CurrentRequestComponent(http, router, route, shipmentService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.shipmentService = shipmentService;
        this.request = new _RequestDetail__WEBPACK_IMPORTED_MODULE_3__["RequestDetail"]();
    }
    CurrentRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.code = this.route.snapshot.paramMap.get('code');
        this.shipmentService.getRequest(this.code).subscribe(function (data) {
            _this.request = data;
            console.log(_this.request);
        });
    };
    CurrentRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-request',
            template: __webpack_require__(/*! ./current-request.component.html */ "./src/app/request/current-request/current-request.component.html"),
            styles: [__webpack_require__(/*! ./current-request.component.scss */ "./src/app/request/current-request/current-request.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shipment_shipment_service__WEBPACK_IMPORTED_MODULE_4__["ShipmentService"]])
    ], CurrentRequestComponent);
    return CurrentRequestComponent;
}());



/***/ }),

/***/ "./src/app/request/request-detail/request-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/request/request-detail/request-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/request/request-detail/request-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/request/request-detail/request-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/request/request-detail/request-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/request/request-detail/request-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: RequestDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailComponent", function() { return RequestDetailComponent; });
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

var RequestDetailComponent = /** @class */ (function () {
    function RequestDetailComponent() {
    }
    RequestDetailComponent.prototype.ngOnInit = function () {
    };
    RequestDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-detail',
            template: __webpack_require__(/*! ./request-detail.component.html */ "./src/app/request/request-detail/request-detail.component.html"),
            styles: [__webpack_require__(/*! ./request-detail.component.scss */ "./src/app/request/request-detail/request-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestDetailComponent);
    return RequestDetailComponent;
}());



/***/ }),

/***/ "./src/app/request/request-list/request-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/request/request-list/request-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"request\">\r\n  <table class=\"table table-hover\">\r\n    <tbody data-spy=\"scroll\" data-offset=\"50\">\r\n      <tr *ngFor=\"let item of requestList\">\r\n        <td>\r\n          <span>{{item.code}}</span><br />\r\n          <span>{{item.address}}</span>\r\n        </td>\r\n\r\n        <td>\r\n          <span>{{item.estimateDate | date:'short'}}</span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/request/request-list/request-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/request/request-list/request-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".request {\n  font-size: 13px; }\n"

/***/ }),

/***/ "./src/app/request/request-list/request-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/request/request-list/request-list.component.ts ***!
  \****************************************************************/
/*! exports provided: RequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListComponent", function() { return RequestListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_save_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/save.service */ "./src/app/shared/service/save.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestListComponent = /** @class */ (function () {
    function RequestListComponent(http, route, save) {
        this.http = http;
        this.route = route;
        this.save = save;
    }
    RequestListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:60012/api/Driver/shipment/requestList?code=' + this.save.getCode()).subscribe(function (result) {
            _this.data = result;
            _this.requestList = _this.data;
        });
    };
    RequestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-list',
            template: __webpack_require__(/*! ./request-list.component.html */ "./src/app/request/request-list/request-list.component.html"),
            styles: [__webpack_require__(/*! ./request-list.component.scss */ "./src/app/request/request-list/request-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_service_save_service__WEBPACK_IMPORTED_MODULE_3__["SaveService"]])
    ], RequestListComponent);
    return RequestListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog/notification.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/dialog/notification.service.ts ***!
  \******************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.prototype.prompError = function (message, title) {
        if (title === void 0) { title = "Error message"; }
        if (typeof (toastr) !== typeof (undefined)) {
            toastr.error(message, title);
        }
        else {
            alert(message);
        }
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/service/save.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/save.service.ts ***!
  \************************************************/
/*! exports provided: SaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveService", function() { return SaveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveService = /** @class */ (function () {
    function SaveService(http) {
        this.http = http;
        this.waypts = [];
    }
    SaveService.prototype.saveCode = function (code) {
        this.code = code;
    };
    SaveService.prototype.getCode = function () {
        return this.code;
    };
    SaveService.prototype.saveCurrentRequest = function (code) {
        this.currentRequest = code;
    };
    SaveService.prototype.getCurrentRequest = function () {
        return this.currentRequest;
    };
    SaveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SaveService);
    return SaveService;
}());



/***/ }),

/***/ "./src/app/shipment/ShipmentAssigned/ShipmentAssigned.ts":
/*!***************************************************************!*\
  !*** ./src/app/shipment/ShipmentAssigned/ShipmentAssigned.ts ***!
  \***************************************************************/
/*! exports provided: ShipmentAssigned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentAssigned", function() { return ShipmentAssigned; });
var ShipmentAssigned = /** @class */ (function () {
    function ShipmentAssigned() {
    }
    return ShipmentAssigned;
}());



/***/ }),

/***/ "./src/app/shipment/ShipmentAssigned/assigned.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shipment/ShipmentAssigned/assigned.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>List shipment</h1>\r\n<div class=\"list\">\r\n  <table class=\"table table-hover\">\r\n    <thead id=\"head\">\r\n      <tr>\r\n        <th>Shipment Code</th>\r\n        <th>License plate</th>\r\n        <th>Start date</th>\r\n        <th>End date</th>\r\n        <th>Total request</th>\r\n        <th>Status</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n      <tr *ngFor=\"let item of shipmentAssigned\" (click)=\"goToPageDetail(item.code)\">\r\n        <td>{{item.code}}</td>\r\n        <td>{{item.licensePlate}}</td>\r\n        <td>{{item.startDate | date:'short'}}</td>\r\n        <td>{{item.endDate| date:'short'}}</td>\r\n        <td>{{item.requestQuality}}</td>\r\n        <td>\r\n          <span *ngIf=\"item.status=='Pending' || item.status=='Accept' || item.status=='Reject'\"> {{item.status}}</span>\r\n          <span *ngIf=\"item.status!='Pending' && item.status!='Accept' && item.status!='Reject'&& item.status!='Completed' \" id=\"picking\"> {{item.status}}</span>\r\n          <span *ngIf=\"item.status=='Completed'\" id=\"complete\"> {{item.status}}</span>\r\n        </td>\r\n        \r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shipment/ShipmentAssigned/assigned.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shipment/ShipmentAssigned/assigned.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  margin-top: 10px;\n  border: 0.5px solid #000205; }\n\n#head {\n  color: black;\n  border-left: 0.5px solid #000205;\n  background-color: #f2f2f2; }\n\nh1 {\n  text-align: center;\n  color: #0073e6; }\n\n.btn {\n  width: 80px;\n  margin-right: 5px;\n  border: 1.5px solid; }\n\n#picking {\n  color: #0073e6;\n  font-weight: 500; }\n\n#complete {\n  color: red;\n  font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/shipment/ShipmentAssigned/assigned.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shipment/ShipmentAssigned/assigned.component.ts ***!
  \*****************************************************************/
/*! exports provided: AssignedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedComponent", function() { return AssignedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shipment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shipment.service */ "./src/app/shipment/shipment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignedComponent = /** @class */ (function () {
    function AssignedComponent(http, router, service) {
        this.http = http;
        this.router = router;
        this.service = service;
        this.data = {};
        this.paginators = [];
    }
    AssignedComponent.prototype.ngOnInit = function () {
        this.LoadPage(1);
        console.log(this.shipmentAssigned);
    };
    AssignedComponent.prototype.LoadPage = function (page) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'ResponseType': 'Json'
            })
        };
        this.service.getListShipmentAssigned(54).subscribe(function (data) {
            console.log(data);
            _this.shipmentAssigned = data;
        });
    };
    AssignedComponent.prototype.goToShipmentDeatil = function (code) {
        this.router.navigate(['./home/shipmentPicking', code]);
    };
    AssignedComponent.prototype.changeStatus = function (item, status) {
        var _this = this;
        var param = { 'code': item.code, 'status': status };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'ResponseType': 'Json'
            })
        };
        this.http.post('http://localhost:60012/api/Driver/shipmentfeedback', param, httpOptions).subscribe(function (result) {
            if (status == 'Picking') {
                item.status = status;
                _this.goToShipmentDeatil(item.code);
            }
            else
                item.status = status;
        });
    };
    AssignedComponent.prototype.goToPageDetail = function (code) {
        this.router.navigate(['./home/shipmentPicking', code]);
    };
    AssignedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assigned',
            template: __webpack_require__(/*! ./assigned.component.html */ "./src/app/shipment/ShipmentAssigned/assigned.component.html"),
            styles: [__webpack_require__(/*! ./assigned.component.scss */ "./src/app/shipment/ShipmentAssigned/assigned.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shipment_service__WEBPACK_IMPORTED_MODULE_3__["ShipmentService"]])
    ], AssignedComponent);
    return AssignedComponent;
}());



/***/ }),

/***/ "./src/app/shipment/shipment-picking/InfoRequest.ts":
/*!**********************************************************!*\
  !*** ./src/app/shipment/shipment-picking/InfoRequest.ts ***!
  \**********************************************************/
/*! exports provided: InfoRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoRequest", function() { return InfoRequest; });
var InfoRequest = /** @class */ (function () {
    function InfoRequest() {
    }
    return InfoRequest;
}());



/***/ }),

/***/ "./src/app/shipment/shipment-picking/Location.ts":
/*!*******************************************************!*\
  !*** ./src/app/shipment/shipment-picking/Location.ts ***!
  \*******************************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());



/***/ }),

/***/ "./src/app/shipment/shipment-picking/shipment-picking.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shipment/shipment-picking/shipment-picking.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-md-4 container\">\r\n    <div class=\"tille\">\r\n      <span id=\"header\">SHIPMENT</span>\r\n      <img src=\"../../assets/support.svg\" class=\"rounded-circle float-right\" id=\"support\" width=\"60\" height=\"60\" />\r\n    </div>\r\n\r\n    <div class=\"col-sm-12\">\r\n      <input *ngIf=\"shipmentDetail.status != 'Shipping'\" type=\"text\" class=\"form-control-plaintext yourAddress\" readonly value={{locationPicking.address}}>\r\n      <input *ngIf=\"shipmentDetail.status == 'Shipping'\" type=\"text\" class=\"form-control-plaintext yourAddress\" readonly value={{request.location.address}}>\r\n    </div>  \r\n\r\n    <div class=\"detail\">\r\n      <table class=\"table table-hover\">\r\n        <tbody>\r\n          <tr>\r\n            <td>Shipment code</td>\r\n            <td>{{shipmentDetail.code}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Total Package</td>\r\n            <td>{{shipmentDetail.packageQuality}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Start date</td>\r\n            <td style=\"color:red\">{{shipmentDetail.startDate | date:'short'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>End date</td>\r\n            <td>{{shipmentDetail.endDate | date:'short'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Status</td>\r\n            <td>{{shipmentDetail.status}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div style=\"width:50%\" class=\"pr-1\">\r\n          <button *ngIf=\"shipmentDetail.status == 'Pending'\" (click)=\"feedback(shipmentDetail, 'Accept')\" class=\"btn btn-success btn-block\">Accept a shipment</button>\r\n          <button *ngIf=\"shipmentDetail.status == 'Accept'\" (click)=\"feedback(shipmentDetail, 'Picking')\" class=\"btn btn-success btn-block\">Picking</button>\r\n          <button *ngIf=\"shipmentDetail.status == 'Picking'\" (click)=\"feedback(shipmentDetail, 'Loading')\" class=\"btn btn-success btn-block\">Start to load</button>\r\n          <button *ngIf=\"shipmentDetail.status == 'Loading'\" (click)=\"feedback(shipmentDetail, 'Shipping')\" class=\"btn btn-success btn-block\">Complete loading</button>\r\n          <button *ngIf=\"shipmentDetail.status == 'Shipping' && request.status=='Waiting' && request.code==shipmentDetail.currentRequest\" (click)=\"changeStatus(shipmentDetail,'Shipping')\" class=\"btn btn-primary btn-block\">Start to delivery</button>\r\n          <button *ngIf=\"shipmentDetail.status == 'Shipping' && request.status=='Waiting' && request.code!=shipmentDetail.currentRequest\" class=\"btn btn-primary btn-block diable\">Start to delivery</button>\r\n          <button *ngIf=\"shipmentDetail.status == 'Shipping' && request.status=='Shipping' && request.code==shipmentDetail.currentRequest\" (click)=\"changeStatus(shipmentDetail,'Unloading')\" class=\"btn btn-warning btn-block\">Start to unloading</button>\r\n          <button *ngIf=\"shipmentDetail.status == 'Shipping' && request.status=='Unloading'\" (click)=\"changeStatus(shipmentDetail,'Completed')\" class=\"btn btn-success btn-block\">Complete to delivery</button>\r\n          <button *ngIf=\"shipmentDetail.status == 'Completed' || shipmentDetail.status == 'Reject'\" (click)=\"returnList()\" class=\"btn btn-primary btn-block\">Return to list</button>\r\n\r\n        </div>\r\n        <div style=\"width:50%\" class=\"pl-1\">\r\n          <button *ngIf=\"shipmentDetail.status == 'Pending' || shipmentDetail.status == 'Accept'\" (click)=\"feedback(shipmentDetail, 'Reject')\" class=\"btn btn-danger btn-block\">Reject a shipment</button>\r\n          <button *ngIf=\"shipmentDetail.status != 'Pending' && shipmentDetail.status != 'Reject' && shipmentDetail.status != 'Accept'\" class=\"btn btn-danger btn-block\" data-toggle=\"modal\" data-target=\"#Problem\">Have a problem</button>\r\n\r\n          <div class=\"modal fade\" id=\"Problem\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Problem\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\" id=\"exampleModalLongTitle\" style=\"color:red\">Your problem</h5>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <p style=\"font-size:16px\">Request code: {{request.code}}</p>\r\n                  <input type=\"text\" id=\"problem\" class=\"form-control-plaintext\" placeholder=\"Enter your problem\">\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                  <button type=\"button\" class=\"btn btn-primary\">Send</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div id=\"inf\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" *ngIf=\"statusNav=='Request'\" routerLink=\"./\" routerLinkActive=\"hold\">Request detail</a>\r\n          <a class=\"nav-link\" (click)=\"changeNav('Request')\" *ngIf=\"statusNav!='Request'\" routerLink=\"./\">Request detail</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link \" *ngIf=\"statusNav=='List'\" routerLink=\"./\" routerLinkActive=\"hold\">List request</a>\r\n          <a class=\"nav-link \" (click)=\"changeNav('List')\" *ngIf=\"statusNav!='List'\" routerLink=\"./\">List request</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <div *ngIf=\"statusNav=='Request'\">\r\n        <div class=\"tille\">\r\n          <h3>REQUEST DETAIL</h3>\r\n        </div>\r\n        <table class=\"table table-hover\">\r\n          <tbody>\r\n            <tr>\r\n              <td>Request code</td>\r\n              <td *ngIf=\"shipmentDetail.status=='Completed'\">{{request.code}}</td>\r\n              <td *ngIf=\"request.code==shipmentDetail.currentRequest &&shipmentDetail.status!='Completed'\">{{request.code}} <span class=\"badge badge-success\">Current</span></td>\r\n              <td *ngIf=\"request.code!=shipmentDetail.currentRequest && shipmentDetail.status!='Completed'\">{{request.code}} <span (click)=\"gotoCurrentRequest()\" class=\"badge badge-warning\">Not current</span></td>\r\n            </tr>\r\n            <tr>\r\n              <td>Total Package</td>\r\n              <td>{{request.packageQuantity}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Estimate date</td>\r\n              <td>{{request.estimateDate | date:'short'}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Receiver</td>\r\n              <td>{{request.receiverName}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>PhoneNumber</td>\r\n              <td>{{request.receiverPhoneNumber}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Status</td>\r\n              <td>{{request.status}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div *ngIf=\"statusNav=='List'\">\r\n        <table class=\"table table-hover\">\r\n          <tbody data-spy=\"scroll\" data-offset=\"50\">\r\n            <tr *ngFor=\"let item of requestList\" (click)=\"viewRequest(item)\">\r\n              <td>\r\n                <span>{{item.code}} </span> <span class=\"badge badge-success\">{{item.status}}</span><br />\r\n                <span style=\"font-size:12px\">{{item.location.address}}</span><br />\r\n              </td>\r\n              <td>\r\n                <span style=\"font-size:12px\">{{item.estimateDate | date:'short'}}</span>\r\n              </td>\r\n          \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <app-ggmap  [Waypts]=\"Waypts\"></app-ggmap>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shipment/shipment-picking/shipment-picking.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shipment/shipment-picking/shipment-picking.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-top: 5px; }\n\n.tille {\n  text-align: center; }\n\n#header {\n  font-size: 40px;\n  color: #0073e6; }\n\n.yourAddress {\n  border-bottom: 1px solid #0073e6;\n  background-image: url(\"/assets/placeholder.svg\");\n  background-repeat: no-repeat;\n  padding-left: 48px; }\n\n#completed {\n  margin-top: 5px; }\n\n#inf {\n  margin-top: 10px;\n  border: 1px solid #0073e6; }\n\n.nav {\n  border-bottom: 1px solid #0073e6;\n  color: black; }\n\n.nav-item a.hold {\n  background-color: #e6e6ff;\n  color: #0073e6;\n  font-weight: 500;\n  border-bottom: solid;\n  border-bottom-color: #0073e6; }\n\n/* Sidebar */\n\n#sidebar-container {\n  margin-top: 10px;\n  min-height: 460px;\n  padding: 0;\n  border-bottom-color: #0073e6;\n  font-weight: 500; }\n\n#support {\n  border: 2px solid #55E0DE;\n  background-color: #e6e6ff;\n  margin-top: 5px; }\n\n.request {\n  border: 2px solid #0073e6;\n  margin-top: 5px; }\n\nh3 {\n  text-align: center;\n  margin-top: 5px; }\n\n.diable {\n  pointer-events: none;\n  cursor: default;\n  opacity: 0.6; }\n\n.nav-item {\n  width: 50%; }\n\np {\n  font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/shipment/shipment-picking/shipment-picking.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shipment/shipment-picking/shipment-picking.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShipmentPickingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentPickingComponent", function() { return ShipmentPickingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Location */ "./src/app/shipment/shipment-picking/Location.ts");
/* harmony import */ var _InfoRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoRequest */ "./src/app/shipment/shipment-picking/InfoRequest.ts");
/* harmony import */ var _ShipmentAssigned_ShipmentAssigned__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ShipmentAssigned/ShipmentAssigned */ "./src/app/shipment/ShipmentAssigned/ShipmentAssigned.ts");
/* harmony import */ var _shared_service_save_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/save.service */ "./src/app/shared/service/save.service.ts");
/* harmony import */ var _request_RequestDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../request/RequestDetail */ "./src/app/request/RequestDetail.ts");
/* harmony import */ var _shipment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shipment.service */ "./src/app/shipment/shipment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ShipmentPickingComponent = /** @class */ (function () {
    function ShipmentPickingComponent(http, route, router, save, service) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.save = save;
        this.service = service;
        this.data = {};
        this.statusNav = 'Request';
        this.shipmentDetail = new _ShipmentAssigned_ShipmentAssigned__WEBPACK_IMPORTED_MODULE_5__["ShipmentAssigned"]();
        this.request = new _request_RequestDetail__WEBPACK_IMPORTED_MODULE_7__["RequestDetail"]();
        this.status = 'Waiting';
        this.Waypts = [];
        this.Markers = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'ResponseType': 'Json'
            })
        };
        this.locationPicking = {
            address: '',
            latitude: 0,
            longitude: 0
        };
    }
    ShipmentPickingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Markers = [];
        this.Waypts = [];
        this.request.location = new _Location__WEBPACK_IMPORTED_MODULE_3__["Location"]();
        this.code = this.route.snapshot.paramMap.get('code');
        this.save.saveCode(this.code);
        this.service.getLocationPicking(this.code).subscribe(function (data) {
            _this.locationPicking = data;
            var info = new _InfoRequest__WEBPACK_IMPORTED_MODULE_4__["InfoRequest"]();
            info.code = "This is location picking";
            info.status = "Active";
            info.latlng = _this.InitLatlng(_this.locationPicking.latitude, _this.locationPicking.longitude);
            _this.Waypts.unshift(info);
            console.log(_this.locationPicking.latitude, _this.locationPicking.longitude);
        });
        this.refeshShipment(this.code);
        this.GetRequestList();
        // this.Origin = this.InitLatlng(10.7711799, 106.7004174);
    };
    ShipmentPickingComponent.prototype.refeshShipment = function (code) {
        var _this = this;
        this.service.getShipmentDetail(this.code).subscribe(function (data) {
            _this.shipmentDetail = data;
            if (_this.shipmentDetail.status == "Shipping") {
                _this.Waypts[0].status = "unActive";
                console.log(_this.save.waypts);
            }
            if (_this.shipmentDetail.currentRequest == "") {
                _this.feedback(_this.shipmentDetail, 'Completed');
                _this.changeNav('List');
            }
            else {
                _this.service.getRequest(_this.shipmentDetail.currentRequest).subscribe(function (data) {
                    _this.request = data;
                });
            }
        });
    };
    ShipmentPickingComponent.prototype.feedback = function (item, status) {
        var _this = this;
        if (status == "Shipping") {
            //  this.Waypts.splice(0, 1);
            console.log(this.Waypts);
        }
        var param = { 'code': item.code, 'status': status };
        this.service.changeStatusShipment(param).subscribe(function (data) {
            _this.shipmentDetail = data;
        });
    };
    ShipmentPickingComponent.prototype.changeStatus = function (item, status) {
        var _this = this;
        var param = { 'code': item.currentRequest, 'status': status };
        this.service.changeStatusRequest(param).subscribe(function (data) {
            _this.request = data;
        });
        this.GetRequestList();
        if (status == "Completed") {
            this.refeshShipment(this.code);
        }
    };
    ShipmentPickingComponent.prototype.viewRequest = function (item) {
        var _this = this;
        this.changeNav('Request');
        this.service.getRequest(item.code).subscribe(function (data) {
            console.log(data);
            _this.request = data;
        });
    };
    ShipmentPickingComponent.prototype.returnList = function () {
        this.router.navigate(['./home/assigned']);
    };
    ShipmentPickingComponent.prototype.gotoCurrentRequest = function () {
        var _this = this;
        this.service.getRequest(this.shipmentDetail.currentRequest).subscribe(function (data) {
            _this.request = data;
        });
    };
    ShipmentPickingComponent.prototype.changeNav = function (status) {
        this.statusNav = status;
    };
    ShipmentPickingComponent.prototype.GetRequestList = function () {
        var _this = this;
        this.service.getListRequest(this.code).subscribe(function (data) {
            _this.requestList = data;
            console.log(_this.requestList);
            for (var _i = 0, _a = _this.requestList; _i < _a.length; _i++) {
                var item = _a[_i];
                var info = new _InfoRequest__WEBPACK_IMPORTED_MODULE_4__["InfoRequest"]();
                info.latlng = _this.InitLatlng(item.location.latitude, item.location.longitude);
                info.code = item.code;
                info.status = "Active";
                if (item.status != "Waiting") {
                    info.status = "unActive";
                }
                _this.Waypts.push(info);
            }
            _this.save.waypts = _this.Waypts;
        });
    };
    ShipmentPickingComponent.prototype.InitLatlng = function (latitude, longitude) {
        var latlng = new google.maps.LatLng(latitude, longitude);
        return latlng;
    };
    ShipmentPickingComponent.prototype.InitMarker = function (latitude, longitude) {
    };
    ShipmentPickingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-picking',
            template: __webpack_require__(/*! ./shipment-picking.component.html */ "./src/app/shipment/shipment-picking/shipment-picking.component.html"),
            styles: [__webpack_require__(/*! ./shipment-picking.component.scss */ "./src/app/shipment/shipment-picking/shipment-picking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_save_service__WEBPACK_IMPORTED_MODULE_6__["SaveService"],
            _shipment_service__WEBPACK_IMPORTED_MODULE_8__["ShipmentService"]])
    ], ShipmentPickingComponent);
    return ShipmentPickingComponent;
}());



/***/ }),

/***/ "./src/app/shipment/shipment.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shipment/shipment.service.ts ***!
  \**********************************************/
/*! exports provided: ShipmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentService", function() { return ShipmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShipmentService = /** @class */ (function () {
    function ShipmentService(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'http://localhost:60012/api/Driver';
    }
    ShipmentService.prototype.getListShipmentAssigned = function (DriverID) {
        return this.http.get(this.url + "/shipmentAssigned?id=" + DriverID);
    };
    ShipmentService.prototype.getLocationPicking = function (shipmentCode) {
        return this.http.get(this.url + "/getLocationPicking?code=" + shipmentCode);
    };
    ShipmentService.prototype.getShipmentDetail = function (shipmentCode) {
        return this.http.get(this.url + "/shipmentDetail?code=" + shipmentCode);
    };
    ShipmentService.prototype.changeStatusShipment = function (parameter) {
        return this.http.post(this.url + "/shipmentFeedback", parameter);
    };
    ShipmentService.prototype.getRequest = function (requestCode) {
        return this.http.get(this.url + "/shipment/request?code=" + requestCode);
    };
    ShipmentService.prototype.changeStatusRequest = function (parameter) {
        return this.http.post(this.url + "/changeStatus", parameter);
    };
    ShipmentService.prototype.getListRequest = function (shipmentCode) {
        return this.http.get(this.url + "/shipment/requestList?code=" + shipmentCode);
    };
    ShipmentService.prototype.changeOrderReqeust = function (paramerter) {
        return this.http.post(this.url + "/shipment/changeOrder", paramerter);
    };
    ShipmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShipmentService);
    return ShipmentService;
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

module.exports = __webpack_require__(/*! C:\Users\intern01\DEV\GoGo\Applications\GoGoSpa\Client-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map