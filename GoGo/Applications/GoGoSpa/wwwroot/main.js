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
/* harmony import */ var _shipment_ShipmentAssigned_assigned_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipment/ShipmentAssigned/assigned.component */ "./src/app/shipment/ShipmentAssigned/assigned.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request/request-list/request-list.component */ "./src/app/request/request-list/request-list.component.ts");
/* harmony import */ var _shipment_shipment_creating_shipment_creating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipment/shipment-creating/shipment-creating.component */ "./src/app/shipment/shipment-creating/shipment-creating.component.ts");
/* harmony import */ var _shipment_shipment_shipment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shipment/shipment/shipment.component */ "./src/app/shipment/shipment/shipment.component.ts");
/* harmony import */ var _shipment_shipment_list_shipment_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shipment/shipment-list/shipment-list.component */ "./src/app/shipment/shipment-list/shipment-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'login', component: _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], children: [
            { path: 'request', component: _request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_6__["RequestListComponent"] },
            {
                path: 'shipment', component: _shipment_shipment_shipment_component__WEBPACK_IMPORTED_MODULE_8__["ShipmentComponent"], children: [
                    { path: 'create', component: _shipment_shipment_creating_shipment_creating_component__WEBPACK_IMPORTED_MODULE_7__["ShipmentCreatingComponent"] },
                    { path: '', component: _shipment_shipment_list_shipment_list_component__WEBPACK_IMPORTED_MODULE_9__["ShipmentListComponent"] }
                ]
            },
        ] },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], children: [
            { path: 'assigned', component: _shipment_ShipmentAssigned_assigned_component__WEBPACK_IMPORTED_MODULE_4__["AssignedComponent"] }
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
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/account/login/login.component */ "./src/app/modules/account/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shipment_shipment_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shipment/shipment.module */ "./src/app/shipment/shipment.module.ts");
/* harmony import */ var src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/components/dialog/notification.service */ "./src/app/shared/components/dialog/notification.service.ts");
/* harmony import */ var _shared_sevices_config_service_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/sevices/config-service.service */ "./src/app/shared/sevices/config-service.service.ts");
/* harmony import */ var _shared_sevices_pager_service_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/sevices/pager-service.service */ "./src/app/shared/sevices/pager-service.service.ts");
/* harmony import */ var _request_request_service_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./request/request-service.service */ "./src/app/request/request-service.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./request/request-list/request-list.component */ "./src/app/request/request-list/request-list.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var _shipment_shipment_creating_shipment_creating_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shipment/shipment-creating/shipment-creating.component */ "./src/app/shipment/shipment-creating/shipment-creating.component.ts");
/* harmony import */ var _shipment_shipment_shipment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shipment/shipment/shipment.component */ "./src/app/shipment/shipment/shipment.component.ts");
/* harmony import */ var _shipment_shipment_list_shipment_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shipment/shipment-list/shipment-list.component */ "./src/app/shipment/shipment-list/shipment-list.component.ts");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// Import the Animations module

// Import the ButtonsModule





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
                _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_23__["RequestListComponent"],
                _shipment_shipment_creating_shipment_creating_component__WEBPACK_IMPORTED_MODULE_28__["ShipmentCreatingComponent"],
                _shipment_shipment_shipment_component__WEBPACK_IMPORTED_MODULE_29__["ShipmentComponent"],
                _shipment_shipment_list_shipment_list_component__WEBPACK_IMPORTED_MODULE_30__["ShipmentListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"],
                agm_direction__WEBPACK_IMPORTED_MODULE_13__["AgmDirectionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _shipment_shipment_module__WEBPACK_IMPORTED_MODULE_17__["ShipmentModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_25__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_24__["HttpModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["GridModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_27__["ButtonsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientJsonpModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_31__["DropDownsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
                }),
            ],
            providers: [
                src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_18__["NotificationService"], _shared_sevices_config_service_service__WEBPACK_IMPORTED_MODULE_19__["ConfigService"], _shared_sevices_pager_service_service__WEBPACK_IMPORTED_MODULE_20__["PagerService"], _request_request_service_service__WEBPACK_IMPORTED_MODULE_21__["RequestService"]
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

module.exports = "<div class=\"container-fluid clearfix\">\r\n    <app-header></app-header>\r\n    <div class=\"row\" id=\"body-row\">\r\n        <app-navigation></app-navigation>\r\n        <main class=\"main-section col\">\r\n            <!--BODY BEGIN-->\r\n            <router-outlet></router-outlet>\r\n            <p>home works!</p>\r\n            <!--BODY END-->\r\n        </main>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

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

module.exports = "<div class=\"container-fluid clearfix\">\r\n  <app-header></app-header>\r\n  <div class=\"row\" id=\"body-row\">\r\n    <app-navigation></app-navigation>\r\n    <main class=\"main-section col\">\r\n      <!--BODY BEGIN-->\r\n      <router-outlet></router-outlet>\r\n\r\n      <!--BODY END-->\r\n\r\n    </main>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<div id=\"sidebar-container\" class=\"sidebar-expanded d-none d-md-block \">\r\n  <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->\r\n  <!-- Bootstrap List Group -->\r\n  <ul class=\"list-group \" id=\"menu\">\r\n    <!--Menu with submenu\r\n    <li>\r\n      <a href=\"#submenu1\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\" list-group-item list-group-item-action flex-column align-items-start\">\r\n        Dashboard\r\n      </a>\r\n      <div id='submenu1' class=\"collapse sidebar-submenu\">\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          1. Charts\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          2. Reports\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          3. Tables\r\n        </a>\r\n      </div>\r\n    </li>-->\r\n    <li>\r\n      <a routerLink=\"/assigned\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Assigned</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/request\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Request</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/shipment\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Shipment</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/delivery-status\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Delivery Status</a>\r\n    </li>\r\n  </ul><!-- List Group END-->\r\n</div><!-- sidebar-container END -->\r\n"

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
            this.http.post('http://localhost:54520/api/authentication/token', this.model, httpOptions).subscribe(function (result) {
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

/***/ "./src/app/request/request-list/request-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/request/request-list/request-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"border-custom\">\r\n    <h1>Request Management</h1>\r\n  </div>\r\n  <div class=\"py-3\">\r\n    <button class=\"btn btn-success\" (click)=\"onCreateShipment()\">Create Shipment</button>\r\n  </div>\r\n\r\n  <kendo-grid [data]=\"requests\"\r\n              [pageSize]=\"state.take\"\r\n              [skip]=\"state.skip\"\r\n              [sort]=\"state.sort\"\r\n              [sortable]=\"true\"\r\n              [pageable]=\"true\"\r\n              [scrollable]=\"'scrollable'\"\r\n              [group]=\"state.group\"\r\n              [filterable]=\"true\"\r\n              [filter]=\"state.filter\"\r\n              (dataStateChange)=\"dataStateChange($event)\"\r\n              [height]=\"370\">\r\n\r\n    <kendo-grid-column field=\"Code\" title=\"Code\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"CustomerName\" title=\"Customer Name\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"PickingDate\" title=\"Picking Date\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"ExpectedDate\" title=\"Delivery Date\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"PackageQuantity\" title=\"Package Quantity\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"WereHouseAddress\" title=\"WereHouse Address\"></kendo-grid-column>\r\n  </kendo-grid>\r\n\r\n\r\n  <div class=\"modal fade\" id=\"CancelModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"CancelModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"CancelModalLabel\">Cancel</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          Are you sure?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Confirm</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/request/request-list/request-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/request/request-list/request-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* pagination */\n.pagination {\n  height: 36px;\n  margin: 18px 0;\n  color: #6c58bF; }\n.pagination ul {\n  display: inline-block;\n  *display: inline;\n  /* IE7 inline-block hack */\n  *zoom: 1;\n  margin-left: 0;\n  color: #ffffff;\n  margin-bottom: 0;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); }\n.pagination li {\n  display: inline;\n  color: #6c58bF; }\n.pagination a {\n  float: left;\n  padding: 0 14px;\n  line-height: 34px;\n  color: #6c58bF;\n  text-decoration: none;\n  border: 1px solid #ddd;\n  border-left-width: 0; }\n.pagination a:hover,\n.pagination .active a {\n  background-color: #6c58bF;\n  color: #ffffff; }\n.pagination a:focus {\n  background-color: #6c58bF;\n  color: #ffffff; }\n.pagination .active a {\n  color: #ffffff;\n  cursor: default; }\n.pagination .disabled span,\n.pagination .disabled a,\n.pagination .disabled a:hover {\n  color: #999999;\n  background-color: transparent;\n  cursor: default; }\n.pagination li:first-child a {\n  border-left-width: 1px;\n  border-radius: 3px 0 0 3px; }\n.pagination li:last-child a {\n  border-radius: 0 3px 3px 0; }\n.pagination-centered {\n  text-align: center; }\n.pagination-right {\n  text-align: right; }\n.pager {\n  margin-left: 0;\n  margin-bottom: 18px;\n  list-style: none;\n  text-align: center;\n  color: #6c58bF;\n  *zoom: 1; }\n.pager:before,\n.pager:after {\n  display: table;\n  content: \"\"; }\n.center {\n  margin: auto;\n  width: 60%;\n  border: 3px solid #73AD21;\n  padding: 10px; }\n.btn-space {\n  margin-right: 5px; }\n.classWithPad {\n  margin: 10px;\n  padding: 10px; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request-service.service */ "./src/app/request/request-service.service.ts");
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
    function RequestListComponent(requestService, router) {
        var _this = this;
        this.requestService = requestService;
        this.router = router;
        this.state = {
            skip: 0,
            take: 5
        };
        this.requestService.fetch(this.state).subscribe(function (response) { return _this.requests = response; });
    }
    RequestListComponent.prototype.dataStateChange = function (state) {
        var _this = this;
        this.state = state;
        this.requestService.fetch(state)
            .subscribe(function (response) { return _this.requests = response; });
    };
    RequestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-list',
            template: __webpack_require__(/*! ./request-list.component.html */ "./src/app/request/request-list/request-list.component.html"),
            styles: [__webpack_require__(/*! ./request-list.component.scss */ "./src/app/request/request-list/request-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_request_service_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestListComponent);
    return RequestListComponent;
}());



/***/ }),

/***/ "./src/app/request/request-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/request/request-service.service.ts ***!
  \****************************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_sevices_config_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sevices/config-service.service */ "./src/app/shared/sevices/config-service.service.ts");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestService = /** @class */ (function () {
    function RequestService(https, configService, http) {
        this.https = https;
        this.configService = configService;
        this.http = http;
        this.BASE_URL = 'http://localhost:54520/api/Requests/RequestList';
        this.baseUrl = '';
        this.baseUrl = configService.getApiURI();
    }
    RequestService.prototype.fetch = function (state) {
        var queryStr = "" + Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__["toDataSourceRequestString"])(state);
        var hasGroups = state.group && state.group.length;
        return this.http
            .get(this.BASE_URL + "?" + queryStr).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return ({
            data: response['Data'],
            total: parseInt(response['Total'], 10)
        }); }));
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_sevices_config_service_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], RequestService);
    return RequestService;
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

/***/ "./src/app/shared/sevices/config-service.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/sevices/config-service.service.ts ***!
  \**********************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiURI = 'http://localhost:54520/api';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/sevices/pager-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sevices/pager-service.service.ts ***!
  \*********************************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-service.service */ "./src/app/shared/sevices/config-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagerService = /** @class */ (function () {
    function PagerService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.baseUrl = '';
        this.baseUrl = configService.getApiURI();
    }
    PagerService.prototype.getPager = function (totalPages, currentPage) {
        if (currentPage === void 0) { currentPage = 1; }
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            currentPage: currentPage,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"], _config_service_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shipment/ShipmentAssigned/assigned.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shipment/ShipmentAssigned/assigned.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>List shipment</h1>\r\n<div class=\"list\">\r\n  <table class=\"table table-hover\">\r\n    <thead id=\"head\">\r\n      <tr>\r\n        <th>ShipmentCode</th>\r\n        <th>License plate</th>\r\n        <th>StartDate</th>\r\n        <th>EndDate</th>\r\n        <th>RequestQuality</th>\r\n        <th>Assign</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n      <tr *ngFor=\"let item of shipmentAssigned\">\r\n        <td>{{item.code}}</td>\r\n        <td>{{item.licensePlate}}</td>\r\n        <td>{{item.startDate}}</td>\r\n        <td>{{item.status}}</td>\r\n        <td>{{item.requestQuality}}</td>\r\n        <td>\r\n          <a *ngIf=\"item.status == 'Pending' || item.status == 'Reject'\" class=\"btn btn-outline-success\" (click)=\"changeStatus(item.code, 'Accept')\">Accept</a>\r\n          <a *ngIf=\"item.status == 'Pending'\" class=\"btn btn-outline-danger\" (click)=\"changeStatus(item.code, 'Reject')\">Reject</a>\r\n          <a *ngIf=\"item.status == 'Accept'\" class=\"btn btn-outline-primary\" (click)=\"changeStatus(item.code, 'Picking')\">Picking</a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shipment/ShipmentAssigned/assigned.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shipment/ShipmentAssigned/assigned.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  margin-top: 10px;\n  border: 0.5px solid #000205; }\n\n#head {\n  color: black;\n  background-color: #f2f2f2; }\n\nh1 {\n  text-align: center;\n  color: #0073e6; }\n\n.btn {\n  margin-left: 5px; }\n\n.table {\n  text-align: center; }\n"

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
    function AssignedComponent(http, router) {
        this.http = http;
        this.router = router;
        this.data = {};
        this.paginators = [];
    }
    AssignedComponent.prototype.ngOnInit = function () {
        this.LoadPage(1);
    };
    AssignedComponent.prototype.LoadPage = function (page) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'ResponseType': 'Json'
            })
        };
        this.http.get('http://localhost:60012/api/Driver/shipmentAssigned?id=54').subscribe(function (result) {
            //this.paginators = [];
            _this.data = result;
            _this.shipmentAssigned = _this.data;
        });
    };
    AssignedComponent.prototype.changeStatus = function (code, status) {
        var _this = this;
        var param = { 'code': code, 'status': status };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'ResponseType': 'Json'
            })
        };
        this.http.post('http://localhost:60012/api/Driver/shipmentfeedback', param, httpOptions).subscribe(function (result) {
            console.log(result);
            _this.LoadPage(1);
        });
    };
    AssignedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assigned',
            template: __webpack_require__(/*! ./assigned.component.html */ "./src/app/shipment/ShipmentAssigned/assigned.component.html"),
            styles: [__webpack_require__(/*! ./assigned.component.scss */ "./src/app/shipment/ShipmentAssigned/assigned.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AssignedComponent);
    return AssignedComponent;
}());



/***/ }),

/***/ "./src/app/shipment/shipment-creating/shipment-creating.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shipment/shipment-creating/shipment-creating.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-autocomplete [data]=\"view | async\"\r\n                    [valueField]=\"'Code'\">\r\n</kendo-autocomplete>\r\n"

/***/ }),

/***/ "./src/app/shipment/shipment-creating/shipment-creating.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shipment/shipment-creating/shipment-creating.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shipment/shipment-creating/shipment-creating.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shipment/shipment-creating/shipment-creating.component.ts ***!
  \***************************************************************************/
/*! exports provided: ShipmentCreatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentCreatingComponent", function() { return ShipmentCreatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shipment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shipment.service */ "./src/app/shipment/shipment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShipmentCreatingComponent = /** @class */ (function () {
    function ShipmentCreatingComponent(service) {
        this.service = service;
        this.view = service;
        this.service.query();
    }
    ShipmentCreatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-creating',
            template: __webpack_require__(/*! ./shipment-creating.component.html */ "./src/app/shipment/shipment-creating/shipment-creating.component.html"),
            styles: [__webpack_require__(/*! ./shipment-creating.component.scss */ "./src/app/shipment/shipment-creating/shipment-creating.component.scss")]
        }),
        __metadata("design:paramtypes", [_shipment_service__WEBPACK_IMPORTED_MODULE_1__["ShipmentService"]])
    ], ShipmentCreatingComponent);
    return ShipmentCreatingComponent;
}());



/***/ }),

/***/ "./src/app/shipment/shipment-list/shipment-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shipment/shipment-list/shipment-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-3\">\r\n  <button class=\"btn btn-success\" routerLink=\"/shipment/create\">Create Shipment</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shipment/shipment-list/shipment-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shipment/shipment-list/shipment-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shipment/shipment-list/shipment-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shipment/shipment-list/shipment-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShipmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentListComponent", function() { return ShipmentListComponent; });
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

var ShipmentListComponent = /** @class */ (function () {
    function ShipmentListComponent() {
    }
    ShipmentListComponent.prototype.ngOnInit = function () {
    };
    ShipmentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-list',
            template: __webpack_require__(/*! ./shipment-list.component.html */ "./src/app/shipment/shipment-list/shipment-list.component.html"),
            styles: [__webpack_require__(/*! ./shipment-list.component.scss */ "./src/app/shipment/shipment-list/shipment-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShipmentListComponent);
    return ShipmentListComponent;
}());



/***/ }),

/***/ "./src/app/shipment/shipment.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shipment/shipment.module.ts ***!
  \*********************************************/
/*! exports provided: ShipmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentModule", function() { return ShipmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ShipmentAssigned_assigned_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShipmentAssigned/assigned.component */ "./src/app/shipment/ShipmentAssigned/assigned.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShipmentModule = /** @class */ (function () {
    function ShipmentModule() {
    }
    ShipmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _ShipmentAssigned_assigned_component__WEBPACK_IMPORTED_MODULE_2__["AssignedComponent"],
            ]
        })
    ], ShipmentModule);
    return ShipmentModule;
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
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShipmentService = /** @class */ (function (_super) {
    __extends(ShipmentService, _super);
    function ShipmentService(http) {
        var _this = _super.call(this, null) || this;
        _this.http = http;
        _this.BASE_URL = 'http://localhost:54520/api/Shipments/ShipmentList';
        return _this;
    }
    ShipmentService.prototype.fetch = function () {
        var queryStr = "$skip=0&$count=true";
        return this.http
            .get(this.BASE_URL + "?" + queryStr).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response['Data']; }));
    };
    ShipmentService.prototype.query = function () {
        var _this = this;
        this.fetch()
            .subscribe(function (x) { return _super.prototype.next.call(_this, x); });
    };
    ShipmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShipmentService);
    return ShipmentService;
}(rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]));



/***/ }),

/***/ "./src/app/shipment/shipment/shipment.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shipment/shipment/shipment.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"border-custom\">\r\n    <h1>Shipment Management</h1>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shipment/shipment/shipment.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shipment/shipment/shipment.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shipment/shipment/shipment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shipment/shipment/shipment.component.ts ***!
  \*********************************************************/
/*! exports provided: ShipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentComponent", function() { return ShipmentComponent; });
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


var ShipmentComponent = /** @class */ (function () {
    function ShipmentComponent(router) {
        this.router = router;
    }
    ShipmentComponent.prototype.ngOnInit = function () {
    };
    ShipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment',
            template: __webpack_require__(/*! ./shipment.component.html */ "./src/app/shipment/shipment/shipment.component.html"),
            styles: [__webpack_require__(/*! ./shipment.component.scss */ "./src/app/shipment/shipment/shipment.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShipmentComponent);
    return ShipmentComponent;
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

module.exports = __webpack_require__(/*! C:\Users\intern08\Documents\Groove\gogogo\GoGo\Applications\GoGoSpa\Client-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map