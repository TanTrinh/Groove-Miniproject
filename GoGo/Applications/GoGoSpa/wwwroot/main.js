(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/request/request.module": [
		"./src/app/modules/request/request.module.ts",
		"modules-request-request-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'login', component: _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], children: [
            { path: 'request', loadChildren: './modules/request/request.module#RequestModule' },
        ]
    },
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
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_component_dialog_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/component/dialog/notification.service */ "./src/app/shared/component/dialog/notification.service.ts");
/* harmony import */ var _shared_component_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/component/form */ "./src/app/shared/component/form/index.ts");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/account/login/login.component */ "./src/app/modules/account/login/login.component.ts");
/* harmony import */ var _shipment_shipment_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shipment/shipment.module */ "./src/app/shipment/shipment.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_account_account_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/account/account.module */ "./src/app/modules/account/account.module.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var APP_INITIALIZER_PROVIDER = {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
    useFactory: function (ServiceRegistryService) {
        // Do initing of services that is required before app loads
        // NOTE: this factory needs to return a function (that then returns a promise)
        return function () { return ServiceRegistryService.load('http://localhost:49946/configuration/serviceRegistry').toPromise(); };
        //return () => ServiceRegistryService.load('http://localhost:50269/configuration/serviceRegistry').toPromise();
    },
    deps: [_shared__WEBPACK_IMPORTED_MODULE_10__["ServiceRegistryService"]],
    multi: true
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
                //GgmapComponent,
                _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                //AgmCoreModule.forRoot({
                //  apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
                //}),
                //AgmDirectionModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _shipment_shipment_module__WEBPACK_IMPORTED_MODULE_16__["ShipmentModule"],
                _modules_account_account_module__WEBPACK_IMPORTED_MODULE_18__["AccountModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_19__["InputsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"],
                _shared__WEBPACK_IMPORTED_MODULE_10__["ServiceRegistryService"],
                _shared_component_dialog_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"],
                _shared__WEBPACK_IMPORTED_MODULE_10__["AuthHttpService"],
                _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
                _shared_component_form__WEBPACK_IMPORTED_MODULE_12__["FormValidationService"],
                APP_INITIALIZER_PROVIDER,
            ],
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

module.exports = "<div class=\"footer\">\r\n  <h1>\r\n    footer works!\r\n  </h1>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: black; }\n"

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

module.exports = "<div class=\"container-fluid clearfix\">\r\n  <app-header></app-header>\r\n  <div class=\"row\" id=\"body-row\">\r\n    <app-navigation></app-navigation>\r\n    <main class=\"main-section col\">\r\n      <!--BODY BEGIN-->\r\n      <router-outlet></router-outlet>\r\n\r\n      <!--BODY END-->\r\n\r\n    </main>\r\n  </div>\r\n  <app-footer class=\"pt-1\"></app-footer>\r\n</div>\r\n"

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

module.exports = "<div id=\"sidebar-container\" class=\"sidebar-expanded d-none d-md-block \">\r\n  <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->\r\n  <!-- Bootstrap List Group -->\r\n  <ul class=\"list-group \" id=\"menu\">\r\n    <!--Menu with submenu\r\n  <li>\r\n    <a href=\"#submenu1\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\" list-group-item list-group-item-action flex-column align-items-start\">\r\n      Dashboard\r\n    </a>\r\n    <div id='submenu1' class=\"collapse sidebar-submenu\">\r\n      <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n        1. Charts\r\n      </a>\r\n      <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n        2. Reports\r\n      </a>\r\n      <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n        3. Tables\r\n      </a>\r\n    </div>\r\n  </li>-->\r\n\r\n\r\n    <!--<li>\r\n      <a routerLink=\"/assigned\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Assigned</a>\r\n    </li>-->\r\n    <li>\r\n     <a routerLink=\"/request/list\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Request</a>\r\n    </li>\r\n    <li>\r\n      <a  class=\" list-group-item list-group-item-action \">Warehouse</a>\r\n    </li>\r\n    <li>\r\n      <a  class=\" list-group-item list-group-item-action \">Delivery Status</a>\r\n    </li>\r\n  </ul><!-- List Group END-->\r\n</div><!-- sidebar-container END -->\r\n"

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

/***/ "./src/app/modules/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/modules/account/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/account/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-form\">\r\n    <div class=\"centered-form__form\">\r\n        <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" name=\"myForm\">\r\n            <div class=\"form-field\">\r\n                <h1>GoGo</h1>\r\n            </div>\r\n            <hr />\r\n            <div class=\"form-field\">\r\n                <h3>Login</h3>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <label for=\"username\">Username:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"model.username\" name=\"username\" #username=\"ngModel\" autofocus>\r\n                <!--<validation for=\"username\" ></validation>-->\r\n                <div id=\"val-user\" style=\"visibility:hidden\">\r\n                    <p style=\"color:red\"> \r\n                        Username is required.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <label for=\"pwd\">Password:</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" [(ngModel)]=\"model.password\" name=\"password\" #password=\"ngModel\">\r\n                <div id=\"val-pass\" style=\"visibility:hidden\">\r\n                    <p style=\"color:red\">\r\n                        Password is required.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <ul class=\"pagination\">\r\n                    <li>\r\n                        <label><input type=\"checkbox\"> Remember me</label>\r\n                    </li>\r\n                    <li>\r\n                        <a id=\"forgot\" href=\"#\">Forgot password?</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <button type=\"submit\" class=\"btn btn-primary active\">Sign In <i class=\"fas fa-sign-in-alt\"></i></button>\r\n                <div id=\"check-valid\" style=\"visibility:hidden\">\r\n                    <p style=\"color:red\">\r\n                        {{message}}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

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
/* harmony import */ var src_app_shared_component_dialog_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/dialog/notification.service */ "./src/app/shared/component/dialog/notification.service.ts");
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
            this.http.post('http://localhost:49943/api/authentication/token', this.model, httpOptions).subscribe(function (result) {
                var key = "tokenKey";
                console.log(result);
                if (result) {
                    var keyValue = JSON.stringify(result);
                    localStorage.setItem(key, keyValue);
                    _this.router.navigate(['']);
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
            src_app_shared_component_dialog_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/dialog/notification.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/component/dialog/notification.service.ts ***!
  \*****************************************************************/
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

/***/ "./src/app/shared/component/form/form-base.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/component/form/form-base.component.ts ***!
  \**************************************************************/
/*! exports provided: FormMode, FormLink, FormEvent, FormDataSourceMap, FormDataSourceMapper, FormConfiguration, FormError, FormBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMode", function() { return FormMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLink", function() { return FormLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEvent", function() { return FormEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataSourceMap", function() { return FormDataSourceMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataSourceMapper", function() { return FormDataSourceMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConfiguration", function() { return FormConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormError", function() { return FormError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBaseComponent", function() { return FormBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormMode = /** @class */ (function () {
    function FormMode() {
    }
    FormMode.VIEW = 2;
    FormMode.CREATE = 4;
    FormMode.EDIT = 8;
    FormMode.ALL = 2 | 4 | 8;
    return FormMode;
}());

var FormLink = /** @class */ (function () {
    function FormLink() {
    }
    return FormLink;
}());

var FormEvent = /** @class */ (function () {
    function FormEvent() {
        this.onAfterInitFormData = function () { };
        this.onBeforeInitFormData = function () { };
    }
    return FormEvent;
}());

var FormDataSourceMap = /** @class */ (function () {
    function FormDataSourceMap() {
        this.formMode = null;
    }
    return FormDataSourceMap;
}());

var FormDataSourceMapper = /** @class */ (function () {
    function FormDataSourceMapper() {
        this._maps = new Array();
    }
    FormDataSourceMapper.prototype.add = function (name, source, onAfterGetData, formMode) {
        return this.addForMode(FormMode.ALL, name, source, onAfterGetData);
    };
    FormDataSourceMapper.prototype.addForMode = function (formMode, name, source, onAfterGetData) {
        var map = new FormDataSourceMap();
        map.name = name;
        map.source = source;
        map.onAfterGetData = onAfterGetData;
        map.formMode = formMode;
        this._maps.push(map);
        return map;
    };
    FormDataSourceMapper.prototype.get = function (name) {
        return this._maps.find(function (p) { return p.name == name; });
    };
    FormDataSourceMapper.prototype.getMap = function () {
        return this._maps;
    };
    return FormDataSourceMapper;
}());

var FormConfiguration = /** @class */ (function () {
    function FormConfiguration() {
        this.events = new FormEvent();
        this.dataSourceMapper = new FormDataSourceMapper();
    }
    return FormConfiguration;
}());

var FormError = /** @class */ (function () {
    function FormError(message, error) {
        this.message = message;
        this.error = error;
    }
    return FormError;
}());

var FormBaseComponent = /** @class */ (function () {
    function FormBaseComponent(activeRoute, router, notificationService, formService, validationService, createFormService, editFormService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.notificationService = notificationService;
        this.formService = formService;
        this.validationService = validationService;
        this.createFormService = createFormService;
        this.editFormService = editFormService;
        this.formConfiguration = new FormConfiguration();
        this.formData = {};
        this.formErrors = {};
        this.formDataSource = {};
        this.formLinks = new FormLink();
        this._validationRules = new Array();
        this.formName = "Form";
        this.viewFormService = formService;
        // Init Service
        if (createFormService === undefined || createFormService == null) {
            this.createFormService = formService;
            this.editFormService = formService;
        }
    }
    /**
     * Call this function once
     */
    FormBaseComponent.prototype.formOnInit = function (formName, defaultFormData) {
        var _this = this;
        this.formName = formName;
        this._defaultFormData = defaultFormData;
        // Init Route
        this.activeRoute.params.subscribe(function (param) {
            _this._formMode = param['mode'].toLowerCase();
            _this.constructorForFormMode(_this._formMode, param['id']);
            _this.constructorForFormData();
        });
    };
    FormBaseComponent.prototype.deepClone = function (source) {
        return JSON.parse(JSON.stringify(source));
    };
    FormBaseComponent.prototype.constructorForFormMode = function (_formMode, formId) {
        this.formId = formId;
        this.isViewFormMode = false;
        this.isCreateFormMode = false;
        this.isUpdateFormMode = false;
        switch (this._formMode) {
            case "create":
                this.isCreateFormMode = true;
                this.formTitle = "Create " + this.formName;
                this.formModeName = "Create";
                this._formModeCode = FormMode.CREATE;
                break;
            case "update":
                this.isUpdateFormMode = true;
                this.formTitle = "Update " + this.formName;
                this.formModeName = "Edit";
                this._formModeCode = FormMode.EDIT;
                break;
            case "view":
                this.isViewFormMode = true;
                this.formTitle = "View " + this.formName;
                this.formModeName = "View";
                this._formModeCode = FormMode.VIEW;
                break;
            default:
                throw new Error("Form mode = <" + _formMode + "> is not valid.");
        }
        this.formLinks.listPageUrl = this.getListPageUrl();
        this.formLinks.viewFormUrl = this.getViewFormUrl(this.formId);
    };
    FormBaseComponent.prototype.constructorForFormData = function () {
        var _this = this;
        // Form data
        if (this.isViewFormMode) {
            this.viewFormService.getFormData(this.formId).subscribe(function (data) {
                console.log(data);
                _this.formConfiguration.events.onBeforeInitFormData(data);
                _this.formData = data;
                _this.formConfiguration.events.onAfterInitFormData(_this.formData);
                _this.constructorForFormDataSource();
            });
        }
        else if (this.isUpdateFormMode) {
            this.viewFormService.getFormData(this.formId).subscribe(function (data) {
                _this.formConfiguration.events.onBeforeInitFormData(data);
                _this.formData = data;
                _this.formConfiguration.events.onAfterInitFormData(_this.formData);
                _this.constructorForFormDataSource();
            });
        }
        else {
            this.formConfiguration.events.onBeforeInitFormData(this._defaultFormData);
            this.formData = this._defaultFormData;
            this.formConfiguration.events.onAfterInitFormData(this.formData);
            this.constructorForFormDataSource();
        }
    };
    FormBaseComponent.prototype.constructorForFormDataSource = function () {
        var _this = this;
        var _loop_1 = function (map) {
            var mapDataSourceObs = void 0;
            if ((map.formMode & this_1._formModeCode) !== this_1._formModeCode) {
                return "continue";
            }
            if (map.source.getDataSource !== undefined) {
                mapDataSourceObs = map.source.getDataSource();
            }
            else if (typeof (map.source) === 'function' || map.source instanceof Function) {
                mapDataSourceObs = map.source();
            }
            mapDataSourceObs.subscribe(function (res) {
                if (map.onAfterGetData !== undefined && map.onAfterGetData !== null) {
                    _this.formDataSource[map.name] = map.onAfterGetData(res);
                }
                else {
                    _this.formDataSource[map.name] = res;
                }
            });
        };
        var this_1 = this;
        // Data source data
        for (var _i = 0, _a = this.formConfiguration.dataSourceMapper.getMap(); _i < _a.length; _i++) {
            var map = _a[_i];
            _loop_1(map);
        }
    };
    // TODO: Improve to get url automatically
    FormBaseComponent.prototype.getListPageUrl = function () {
        if (this.isUpdateFormMode) {
            return this.editFormService.getListPageUrl();
        }
        return this.createFormService.getListPageUrl();
    };
    FormBaseComponent.prototype.getViewFormUrl = function (formId) {
        if (this.isUpdateFormMode) {
            return this.editFormService.getViewFormUrl(formId);
        }
        return this.createFormService.getViewFormUrl(formId);
    };
    FormBaseComponent.prototype.setValueIfUndefined = function (target, property, value) {
        if (target[property] === undefined || target[property] === null) {
            target[property] = value;
        }
    };
    FormBaseComponent.prototype.onNavigateToListPage = function () {
        this.router.navigateByUrl(this.getListPageUrl());
    };
    FormBaseComponent.prototype.onNavigateToViewPage = function () {
        this.navigateToViewPage(this.formId);
    };
    FormBaseComponent.prototype.navigateToViewPage = function (formId) {
        this.router.navigateByUrl(this.getViewFormUrl(formId));
    };
    FormBaseComponent.prototype.onSubmitForm = function (formGroup) {
        var _this = this;
        this.formErrors = {};
        var validationResult = this.validationService.validateForm(formGroup, this._validationRules);
        if (!validationResult.isValid) {
            this.formErrors = validationResult.errors;
            console.log(this.formErrors);
            return;
        }
        this.submitForm(formGroup).subscribe(function (res) {
            formGroup.reset();
            if (_this.isCreateFormMode) {
                _this.navigateToViewPage(res.value);
            }
            else {
                _this.navigateToViewPage(_this.formId);
            }
        }, function (err) {
            console.log(err);
            if (err.status === 400) {
                _this.notificationService.prompError(err.error.message);
            }
            else {
                _this.notificationService.prompError(err.message);
            }
        });
    };
    FormBaseComponent.prototype.changeToMode = function (formMode, id) {
        this._formMode = formMode;
        this.constructorForFormMode(formMode, { id: id });
    };
    FormBaseComponent.prototype.submitForm = function (formGroup) {
        if (this.isUpdateFormMode) {
            return this.editFormService.edit(this.formId, this.formData);
        }
        else if (this.isCreateFormMode) {
            return this.createFormService.create(this.formData);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new FormError("Mode not support"));
    };
    FormBaseComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    FormBaseComponent.prototype.refreshForm = function () {
        this.constructorForFormData();
    };
    FormBaseComponent.prototype.addValiationRule = function (validationRule) {
        this._validationRules.push(validationRule);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("mainForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], FormBaseComponent.prototype, "mainFormElement", void 0);
    return FormBaseComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/form/form-validation.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/component/form/form-validation.service.ts ***!
  \******************************************************************/
/*! exports provided: FormValidationService, ValidationType, ValidationResult, ValidationFunctionResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationService", function() { return FormValidationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationType", function() { return ValidationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationResult", function() { return ValidationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFunctionResult", function() { return ValidationFunctionResult; });
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

var FormValidationService = /** @class */ (function () {
    function FormValidationService() {
        this.formErrors = [];
    }
    FormValidationService.prototype.validateForm = function (formGroup, _validationRules, isShowingInnerError) {
        var controlName;
        var errorMsgs = [];
        var errorInstance = {};
        _validationRules = this.initValidationRulesIfEmpty(_validationRules);
        var normalRules = _validationRules.filter(function (p) { return p.type !== ValidationType.specific; });
        var isFormValid = formGroup.valid;
        for (controlName in formGroup.form.controls) {
            var control = formGroup.form.controls[controlName];
            var controlValid = !control.invalid;
            var errorMsgs = [];
            //specific rules
            var specifyRules = _validationRules.filter(function (p) { return (p.controlName == controlName || p.controlName == 'all') && p.type == ValidationType.specific; });
            specifyRules.forEach(function (rule) {
                var ruleResult = rule.validator(control.value);
                if (!ruleResult.isValid) {
                    controlValid = false;
                    errorMsgs.push(isShowingInnerError ? rule.errorMessage + ': ' + ruleResult.detailErrorMessage : rule.errorMessage);
                }
            });
            //normal rules
            for (var errorKey in control.errors) {
                var normalRule = normalRules.find(function (p) { return p.errorKey == errorKey; });
                if (normalRule !== undefined && normalRule !== null) {
                    errorMsgs.push(normalRule.errorMessage);
                }
            }
            isFormValid = isFormValid && controlValid;
            if (!controlValid)
                errorInstance[controlName] = errorMsgs.join(";");
        }
        return {
            isValid: isFormValid,
            errors: errorInstance
        };
    };
    FormValidationService.prototype.initValidationRulesIfEmpty = function (_validationRules) {
        if (!_validationRules || _validationRules.length == 0) {
            return [
                {
                    errorKey: "required",
                    errorMessage: "This field is required"
                }
            ];
        }
        else
            return _validationRules;
    };
    FormValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FormValidationService);
    return FormValidationService;
}());

var ValidationType;
(function (ValidationType) {
    ValidationType[ValidationType["all"] = 0] = "all";
    ValidationType[ValidationType["specific"] = 1] = "specific";
})(ValidationType || (ValidationType = {}));
var ValidationResult = /** @class */ (function () {
    function ValidationResult() {
    }
    return ValidationResult;
}());

var ValidationFunctionResult = /** @class */ (function () {
    function ValidationFunctionResult() {
    }
    return ValidationFunctionResult;
}());



/***/ }),

/***/ "./src/app/shared/component/form/index.ts":
/*!************************************************!*\
  !*** ./src/app/shared/component/form/index.ts ***!
  \************************************************/
/*! exports provided: FormMode, FormLink, FormEvent, FormDataSourceMap, FormDataSourceMapper, FormConfiguration, FormError, FormBaseComponent, FormValidationService, ValidationType, ValidationResult, ValidationFunctionResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-base.component */ "./src/app/shared/component/form/form-base.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormMode", function() { return _form_base_component__WEBPACK_IMPORTED_MODULE_0__["FormMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLink", function() { return _form_base_component__WEBPACK_IMPORTED_MODULE_0__["FormLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormEvent", function() { return _form_base_component__WEBPACK_IMPORTED_MODULE_0__["FormEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormDataSourceMap", function() { return _form_base_component__WEBPACK_IMPORTED_MODULE_0__["FormDataSourceMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormDataSourceMapper", function() { return _form_base_component__WEBPACK_IMPORTED_MODULE_0__["FormDataSourceMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormConfiguration", function() { return _form_base_component__WEBPACK_IMPORTED_MODULE_0__["FormConfiguration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormError", function() { return _form_base_component__WEBPACK_IMPORTED_MODULE_0__["FormError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBaseComponent", function() { return _form_base_component__WEBPACK_IMPORTED_MODULE_0__["FormBaseComponent"]; });

/* harmony import */ var _form_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-validation.service */ "./src/app/shared/component/form/form-validation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormValidationService", function() { return _form_validation_service__WEBPACK_IMPORTED_MODULE_1__["FormValidationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationType", function() { return _form_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationResult", function() { return _form_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationFunctionResult", function() { return _form_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationFunctionResult"]; });





/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: ServiceRegistryService, AuthHttpService, LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_service_registry_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/service-registry.service */ "./src/app/shared/services/service-registry.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceRegistryService", function() { return _services_service_registry_service__WEBPACK_IMPORTED_MODULE_0__["ServiceRegistryService"]; });

/* harmony import */ var _services_auth_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth-http.service */ "./src/app/shared/services/auth-http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthHttpService", function() { return _services_auth_http_service__WEBPACK_IMPORTED_MODULE_1__["AuthHttpService"]; });

/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]; });






/***/ }),

/***/ "./src/app/shared/models/guid.ts":
/*!***************************************!*\
  !*** ./src/app/shared/models/guid.ts ***!
  \***************************************/
/*! exports provided: Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
var Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return ([1e7].toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) { return (parseInt(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(c) / 4).toString(16); });
    };
    return Guid;
}());



/***/ }),

/***/ "./src/app/shared/models/service-registry.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/service-registry.ts ***!
  \***************************************************/
/*! exports provided: ServiceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRegistry", function() { return ServiceRegistry; });
var ServiceRegistry = /** @class */ (function () {
    function ServiceRegistry() {
    }
    return ServiceRegistry;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth-http.service.ts ***!
  \******************************************************/
/*! exports provided: AuthHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHttpService", function() { return AuthHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/guid */ "./src/app/shared/models/guid.ts");
/* harmony import */ var _service_registry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-registry.service */ "./src/app/shared/services/service-registry.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _component_dialog_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././component/dialog/notification.service */ "./src/app/shared/component/dialog/notification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Recommend to use @auth0/angular-jwt
var AuthHttpService = /** @class */ (function () {
    /**
     * TODO
     * Every http request should include:
     * x-request-id : generated by client. Which used to for debugging & troubleshooting. Client can give troubleshooter this id to lookup for logs on server.
     * x-client-id: this is client-id in OAUTH standard to indicate where the request comming from
     *
     */
    function AuthHttpService(_serviceRegistryService, _notificationService, _http) {
        this._serviceRegistryService = _serviceRegistryService;
        this._notificationService = _notificationService;
        this._http = _http;
    }
    AuthHttpService.prototype.subscribeForRequest = function (request) {
        var _this = this;
        return request
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (res) {
            if (res.status === 500) {
                _this._notificationService.prompError(res.statusText);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            // Hide loading affect
        }));
    };
    AuthHttpService.prototype.beforeSendRequest = function () {
        // Show loading affect
    };
    AuthHttpService.prototype.get = function (url) {
        this.beforeSendRequest();
        return this.subscribeForRequest(this._http.get(this.getAbsoluteUrl(url)));
    };
    AuthHttpService.prototype.post = function (url, body) {
        this.beforeSendRequest();
        return this.subscribeForRequest(this._http.post(this.getAbsoluteUrl(url), body));
    };
    AuthHttpService.prototype.put = function (url, body) {
        this.beforeSendRequest();
        return this.subscribeForRequest(this._http.put(this.getAbsoluteUrl(url), body));
    };
    AuthHttpService.prototype.patch = function (url, body) {
        this.beforeSendRequest();
        return this.subscribeForRequest(this._http.patch(this.getAbsoluteUrl(url), body));
    };
    AuthHttpService.prototype.getAbsoluteUrl = function (path) {
        return this._serviceRegistryService.registry.apiUrl + path;
    };
    AuthHttpService.prototype.getRequestId = function () {
        return _models_guid__WEBPACK_IMPORTED_MODULE_1__["Guid"].newGuid();
    };
    AuthHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_registry_service__WEBPACK_IMPORTED_MODULE_2__["ServiceRegistryService"],
            _component_dialog_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], AuthHttpService);
    return AuthHttpService;
}());



/***/ }),

/***/ "./src/app/shared/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: APP_CONSTRAIN, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONSTRAIN", function() { return APP_CONSTRAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
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

// APP_CONSTRAIN.ts
var APP_CONSTRAIN = {
    authentication: {
        tokenStoreKey: '.access_token'
    }
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        this._userTokenStoreKey = ".access_token";
    }
    AuthenticationService.prototype.storeToken = function (token) {
        localStorage.setItem(APP_CONSTRAIN.authentication.tokenStoreKey, token);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/shared/services/local-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/local-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
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

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.set = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/shared/services/service-registry.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/service-registry.service.ts ***!
  \*************************************************************/
/*! exports provided: ServiceRegistryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRegistryService", function() { return ServiceRegistryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_models_service_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/service-registry */ "./src/app/shared/models/service-registry.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiceRegistryService = /** @class */ (function () {
    function ServiceRegistryService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        // TODO: Set ConfigurationService as a sigleton
        this.registry = null;
    }
    ServiceRegistryService.prototype.load = function (configurationUrl) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // Implement singleton
            if (_this.registry !== null) {
                observer.next(_this.registry);
                observer.complete();
            }
            // Fetch registry
            _this.http.get(configurationUrl).subscribe(function (response) {
                _this.registry = new src_app_shared_models_service_registry__WEBPACK_IMPORTED_MODULE_4__["ServiceRegistry"]();
                _this.registry.apiUrl = response.api;
                observer.next(_this.registry);
                observer.complete();
            });
        });
    };
    ServiceRegistryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], ServiceRegistryService);
    return ServiceRegistryService;
}());



/***/ }),

/***/ "./src/app/shipment/ShipmentAssigned/assigned.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shipment/ShipmentAssigned/assigned.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>List shipment</h1>\r\n<div class=\"list\">\r\n  <table class=\"table table-hover\">\r\n    <thead id=\"head\">\r\n      <tr>\r\n        <th>ShipmentCode</th>\r\n        <th>License plate</th>\r\n        <th>StartDate</th>\r\n        <th>EndDate</th>\r\n        <th>RequestQuality</th>\r\n        <th>Assign</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n      <tr *ngFor=\"let item of shipmentAssigned\" >\r\n        <td>{{item.code}}</td>\r\n        <td>{{item.licensePlate}}</td>\r\n        <td>{{item.startDate}}</td>\r\n        <td>{{item.status}}</td>\r\n        <td>{{item.requestQuality}}</td>\r\n        <td>\r\n          <a *ngIf=\"item.status == 'Pending' || item.status == 'Reject'\" class=\"btn btn-outline-success\" (click)=\"changeStatus(item.code, 'Accept')\">Accept</a>\r\n          <a *ngIf=\"item.status == 'Pending'\" class=\"btn btn-outline-danger\" (click)=\"changeStatus(item.code, 'Reject')\">Reject</a>\r\n          <a *ngIf=\"item.status == 'Accept'\" class=\"btn btn-outline-primary\" (click)=\"changeStatus(item.code, 'Picking')\">Picking</a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

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

module.exports = __webpack_require__(/*! C:\Users\intern05\Documents\gogoproject\GoGo\Applications\GoGoSpa\Client-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map