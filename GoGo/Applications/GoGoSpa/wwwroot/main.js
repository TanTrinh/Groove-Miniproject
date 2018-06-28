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
/* harmony import */ var _modules_identity_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/identity/user/user-list/user-list.component */ "./src/app/modules/identity/user/user-list/user-list.component.ts");
/* harmony import */ var _modules_identity_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/identity/user/user-profile/user-profile.component */ "./src/app/modules/identity/user/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_identity_user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/identity/user/user-detail/user-detail.component */ "./src/app/modules/identity/user/user-detail/user-detail.component.ts");
/* harmony import */ var _modules_identity_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/identity/user/user-create/user-create.component */ "./src/app/modules/identity/user/user-create/user-create.component.ts");
/* harmony import */ var _modules_identity_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/identity/user/user-edit/user-edit.component */ "./src/app/modules/identity/user/user-edit/user-edit.component.ts");
/* harmony import */ var _modules_identity_user_user_profile_edit_user_profile_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/identity/user/user-profile-edit/user-profile-edit.component */ "./src/app/modules/identity/user/user-profile-edit/user-profile-edit.component.ts");
/* harmony import */ var _shared_services_authservices_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/authservices/auth-guard.service */ "./src/app/shared/services/authservices/auth-guard.service.ts");
/* harmony import */ var _shared_services_roleguardservice_role_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/roleguardservice/role-guard.service */ "./src/app/shared/services/roleguardservice/role-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { GgmapComponent } from './ggmap/ggmap.component';











var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    {
        path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], children: [
            { path: 'assigned', component: _shipment_ShipmentAssigned_assigned_component__WEBPACK_IMPORTED_MODULE_4__["AssignedComponent"] },
            {
                path: 'account', component: _modules_identity_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"], canActivate: [_shared_services_roleguardservice_role_guard_service__WEBPACK_IMPORTED_MODULE_14__["RoleGuardService"]], data: {
                    expectedRole: 'Administrator'
                }, children: [
                    { path: 'create', component: _modules_identity_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_10__["UserCreateComponent"] },
                    { path: 'detail/:id', component: _modules_identity_user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_9__["UserDetailComponent"] },
                    { path: 'edit/:id', component: _modules_identity_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserEditComponent"] }
                ]
            }
        ]
    },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], children: [
            { path: 'profile', component: _modules_identity_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"], canActivate: [_shared_services_authservices_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] },
            { path: 'profile/edit/:id', component: _modules_identity_user_user_profile_edit_user_profile_edit_component__WEBPACK_IMPORTED_MODULE_12__["UserProfileEditComponent"] }
        ]
    }
    //{ path: 'detail/:id', component: UserDetailComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
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
/* harmony import */ var _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/account/login/login.component */ "./src/app/modules/account/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shipment_shipment_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shipment/shipment.module */ "./src/app/shipment/shipment.module.ts");
/* harmony import */ var src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/components/dialog/notification.service */ "./src/app/shared/components/dialog/notification.service.ts");
/* harmony import */ var _modules_identity_user_user_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/identity/user/user.module */ "./src/app/modules/identity/user/user.module.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { GgmapComponent } from './ggmap/ggmap.component';
//import { AgmCoreModule, AgmDataLayer } from '@agm/core';
//import { AgmDirectionModule } from 'agm-direction';






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
                //GgmapComponent,
                _modules_account_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                //AgmCoreModule.forRoot({
                //  apiKey: 'AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE'
                //}),
                //AgmDirectionModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _shipment_shipment_module__WEBPACK_IMPORTED_MODULE_13__["ShipmentModule"],
                _modules_identity_user_user_module__WEBPACK_IMPORTED_MODULE_15__["UserModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem('tokenKey');
                        }
                    }
                })
            ],
            providers: [
                src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtHelperService"]
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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<nav class=\"navbar navbar-expand-md row\" id=\"narbar\">\r\n  <a class=\"navbar-brand\" id=\"brand\">\r\n    <h2>GoGo</h2>\r\n  </a>\r\n  <a id=\"toggleButton\" class=\"navbar-toggler \" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    Menu\r\n  </a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav\">\r\n      <!-- This menu is hidden in bigger devices with d-sm-none.\r\n           The sidebar isn't proper for smaller screens imo, so this dropdown menu can keep all the useful sidebar itens exclusively for smaller screens  -->\r\n      <li class=\"nav-item dropdown d-sm-block d-md-none\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"smallerscreenmenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n          List\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"smallerscreenmenu\" id=\"smallMenu\">\r\n          <a class=\"dropdown-item\" href=\"#\">Dashboard</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Profile</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Tasks</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Etc ...</a>\r\n        </div>\r\n      </li><!-- Smaller devices menu END -->\r\n    </ul>\r\n  </div>\r\n  <div class=\"btn-group\">\r\n    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\r\n      Account\r\n    </button>\r\n    <div class=\"dropdown-menu dropdown-menu-right\" id=\"AccountDropdown\">\r\n      <a class=\"dropdown-item\" routerLink=\"/home/profile\">Profile</a>\r\n      <div class=\"dropdown-divider\"></div>\r\n      <a class=\"dropdown-item\" (click)=\"logOut()\">Logout</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

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

module.exports = "<div id=\"sidebar-container\" class=\"sidebar-expanded d-none d-md-block \">\r\n  <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->\r\n  <!-- Bootstrap List Group -->\r\n  <ul class=\"list-group \" id=\"menu\">\r\n    <!--Menu with submenu\r\n    <li>\r\n      <a href=\"#submenu1\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\" list-group-item list-group-item-action flex-column align-items-start\">\r\n        Dashboard\r\n      </a>\r\n      <div id='submenu1' class=\"collapse sidebar-submenu\">\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          1. Charts\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          2. Reports\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action \">\r\n          3. Tables\r\n        </a>\r\n      </div>\r\n    </li>-->\r\n    <li>\r\n      <a routerLink=\"/assigned\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Assigned</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/request\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Request</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/warehouse\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Warehouse</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/delivery-status\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Delivery Status</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/account\" routerLinkActive=\"hold\" class=\" list-group-item list-group-item-action \">Account</a>\r\n    </li>\r\n  </ul><!-- List Group END-->\r\n</div><!-- sidebar-container END -->\r\n"

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

module.exports = "<div class=\"centered-form\">\r\n    <div class=\"centered-form__form\">\r\n        <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" name=\"myForm\">\r\n            <div class=\"form-field\">\r\n                <h1>GoGo</h1>\r\n            </div>\r\n            <hr />\r\n            <div class=\"form-field\">\r\n                <h3>Login</h3>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <label for=\"username\">Username:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"model.username\" name=\"username\" #username=\"ngModel\" required autofocus>\r\n                <!--<validation for=\"username\" ></validation>-->\r\n                <!--<div id=\"val-user\" style=\"visibility:hidden\">\r\n                    <p style=\"color:red\">\r\n                        Username is required.\r\n                    </p>\r\n                </div>-->\r\n\r\n               <div [ngClass]=\"{'hidden': username.valid || username.pristine}\" class=\"validation-message\">\r\n                    <p style=\"color:red\">\r\n                        Username is required.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <label for=\"pwd\">Password:</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" [(ngModel)]=\"model.password\" name=\"password\" #password=\"ngModel\" required>\r\n                <div [ngClass]=\"{'hidden': password.valid || password.pristine}\" class=\"validation-message\">\r\n                  <p style=\"color:red\">\r\n                    Password is required.\r\n                  </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <ul class=\"pagination\">\r\n                    <li>\r\n                        <label><input type=\"checkbox\"> Remember me</label>\r\n                    </li>\r\n                    <li>\r\n                        <a id=\"forgot\" href=\"#\">Forgot password?</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <button type=\"submit\" class=\"btn btn-primary active\">Sign In</button>\r\n                <div [hidden]=\"!isError\" class=\"validation-message\">\r\n                  <p style=\"color:red\">\r\n                    {{message}}\r\n                  </p>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/account/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/account/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-form {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  /*background: url(https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df15ce8f5d3c650a1f5507b2f6603841&auto=format&fit=crop&w=1355&q=80);*/\n  background: url(\"/assets/pictures/photo-1519003722824-194d4455a60c.jpg\");\n  background-size: cover;\n  background-position: center; }\n\n.centered-form__form {\n  background: rgba(250, 250, 250, 0.9);\n  border: 1px solid #e1e1e1;\n  border-radius: 5px;\n  padding: 0px 20px;\n  margin: 20px;\n  height: 560px;\n  width: 400px; }\n\nh1 {\n  font-weight: 600;\n  text-align: center;\n  font-size: 2.0rem;\n  color: #418cf4; }\n\nh3 {\n  font-weight: 600;\n  text-align: center;\n  font-size: 1.5rem; }\n\n#forgot {\n  margin-left: 105px; }\n\n.form-field {\n  margin: 20px 0 20px 0; }\n\n.form-field > * {\n  width: 100%; }\n\n.form-field label {\n  display: block;\n  margin-bottom: 7px; }\n\n.form-field input, .form-field select {\n  border: 1px solid #e1e1e1;\n  padding: 10px; }\n\nbutton {\n  margin: 15px 0; }\n"

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
    function LoginComponent(_http, _router, _notificationService) {
        this._http = _http;
        this._router = _router;
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
        this._http.post('http://localhost:62772/api/authentication/token', this.model, httpOptions).subscribe(function (result) {
            var key = "tokenKey";
            console.log(result);
            if (result) {
                var keyValue = JSON.stringify(result);
                localStorage.setItem(key, keyValue);
                _this._router.navigate(['home']);
            }
        }, function (error) {
            _this.isError = true;
            var httpError = error;
            if (httpError.status === 400) {
                _this.message = httpError.error.message;
            }
            else {
                _this._notificationService.prompError(httpError.message);
            }
        });
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

/***/ "./src/app/modules/identity/user/user-create/user-create.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-create/user-create.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #myForm=\"ngForm\" (ngSubmit)=\"onCreate()\" name=\"myForm\">\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"username\">Username*</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"model.username\" name=\"username\" #username=\"ngModel\" required autofocus>\r\n    <div [ngClass]=\"{'hidden': username.valid || username.pristine}\" class=\"validation-message\">\r\n      Username is required.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"password\">Password*</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"pwd\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"model.password\" required>\r\n    <div [ngClass]=\"{'hidden': password.valid || password.pristine}\" class=\"validation-message\">\r\n      Password is required.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"repassword\">Re-Password*</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"repwd\" #repassword=\"ngModel\" name=\"repassword\" [(ngModel)]=\"model.repassword\" required>\r\n    <div [ngClass]=\"{'hidden': repassword.valid || repassword.pristine}\" class=\"validation-message\">\r\n      Re-Password is required.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"email\">Email*</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\" required email=\"true\">\r\n    <div [ngClass]=\"{'hidden': email.valid || email.pristine}\" class=\"validation-message\">\r\n      <div *ngIf=\"email?.errors?.required\">\r\n        Email is required.\r\n      </div>\r\n      <div *ngIf=\"email?.errors?.email\">\r\n        This is not valid email, email should be <i>abc@gmail.com</i>.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"phonenumber\">Phone Number*</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"phonenumber\" [(ngModel)]=\"model.phonenumber\" name=\"phonenumber\" #phonenumber=\"ngModel\" required>\r\n    <div [ngClass]=\"{'hidden': phonenumber.valid || phonenumber.pristine}\" class=\"validation-message\">\r\n      Phone number is required.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"role\">Role*</label>\r\n    <select type=\"text\" class=\"form-control\" id=\"role\" [(ngModel)]=\"model.role\" name=\"role\" #role=\"ngModel\" required>\r\n      <option>Customer</option>\r\n      <option>Driver</option>\r\n      <option>Coordinator</option>\r\n      <option>Administrator</option>\r\n    </select>\r\n    <div [ngClass]=\"{'hidden': role.valid || role.pristine}\" class=\"validation-message\">\r\n      Role is required.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <div class=\"form-group col-md-9 row\">\r\n      <button type=\"submit\" class=\"btn btn-success active\">Create</button>&nbsp;\r\n      <button class=\"btn btn-primary active\" (click)=\"back()\">Back</button>&nbsp;\r\n    </div>\r\n    <div [hidden]=\"!isError\" class=\"validation-message\">\r\n      {{message}}\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/identity/user/user-create/user-create.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-create/user-create.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/identity/user/user-create/user-create.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-create/user-create.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/dialog/notification.service */ "./src/app/shared/components/dialog/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(_http, _router, _location, _notificationService) {
        this._http = _http;
        this._router = _router;
        this._location = _location;
        this._notificationService = _notificationService;
        this.data = {};
        this.message = null;
        this.model = {
            username: '',
            password: '',
            repassword: '',
            email: '',
            phonenumber: '',
            role: ''
        };
        this.isError = false;
        this.lStorage = localStorage.length;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent.prototype.onCreate = function () {
        var _this = this;
        var key = localStorage.getItem('tokenKey');
        var currentKey = JSON.parse(key);
        if (this.lStorage != 0) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentKey.access_token
                })
            };
            this._http.post('http://localhost:62772/api/user/create', this.model, httpOptions).subscribe(function (result) {
                _this.data = result;
                _this._router.navigate(['home/detail', _this.data.value]);
            }, function (error) {
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
    };
    UserCreateComponent.prototype.back = function () {
        this._location.back();
    };
    UserCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/modules/identity/user/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/modules/identity/user/user-create/user-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/identity/user/user-detail/UserDetail.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/identity/user/user-detail/UserDetail.ts ***!
  \*****************************************************************/
/*! exports provided: UserDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetail", function() { return UserDetail; });
var UserDetail = /** @class */ (function () {
    function UserDetail() {
    }
    return UserDetail;
}());



/***/ }),

/***/ "./src/app/modules/identity/user/user-detail/user-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-detail/user-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"border-custom\">\r\n    <h1>User Detail</h1>\r\n  </div>\r\n  <div class=\"container pt-2\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-lg-3 \" align=\"center\">\r\n        <img alt=\"User Pic\" src=\"https://image.flaticon.com/icons/svg/3/3641.svg\" class=\"img-circle\">\r\n      </div>\r\n      <div class=\"col-md-9 col-lg-9\">\r\n        <table class=\"table\">\r\n          <tbody>\r\n            <tr>\r\n              <th>Full name:</th>\r\n              <td>{{userDetail.userName}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Date of birth:</th>\r\n              <td>06/09/1996</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Email:</th>\r\n              <td>{{userDetail.email}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Phone number:</th>\r\n              <td>{{userDetail.phoneNumber}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Address:</th>\r\n              <td>132 Hàm Nghi, Quận 1, Tp. Hồ Chí Minh</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Join date:</th>\r\n              <td>{{userDetail.createdDate | date:'medium'}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"row justify-content-center\">\r\n          <!--<a href=\"#\" class=\"btn btn-primary btn-space\">Edit User</a>-->\r\n          <button class=\"btn btn-primary\" routerLink=\"/profile/edit\">Edit</button>&nbsp;\r\n          <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#ChangePWDModal\">Change Password</button>&nbsp;\r\n          <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#DeactivateModal\">Deactivate</button>&nbsp;\r\n          <button class=\"btn btn-primary\" (click)=\"pageBack()\">Back</button>&nbsp;\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Deactivate Modal-->\r\n<div class=\"modal fade\" id=\"DeactivateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeactivateModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"DeactivateModalLabel\">Deactivate</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form>\r\n        <div class=\"modal-body\">\r\n          <p>Please fill your password to comfirm.</p>\r\n          <input class=\"form-control\" type=\"password\" id=\"Password\" name=\"Password\" placeholder=\"Password\" />\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-custom\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"submit\" class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#DeactivateMessage\">Confirm</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Deactivate Message Modal-->\r\n<div class=\"modal fade\" id=\"DeactivateMessage\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeactivateMessageLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"DeactivateMessageLabel\">Deactivate</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p class=\"text-danger\">You have 7 days remain before your account being deactivate!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--ChangePWD Modal-->\r\n<div class=\"modal fade\" id=\"ChangePWDModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ChangePWDModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"ChangePWDModalLabel\">Deactivate</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label for=\"CurrentPassword\">Current Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"CurrentPassword\" id=\"CurrentPassword\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"NewPassword\">New Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"NewPassword\" id=\"NewPassword\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"RePassword\">Re-Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"RePassword\" id=\"RePassword\">\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-custom\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"submit\" class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#ChangePWDMessage\">Confirm</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--ChangePWD Message Modal-->\r\n<div class=\"modal fade\" id=\"ChangePWDMessage\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ChangePWDMessageLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title \" id=\"ChangePWDMessageLabel\">Password changed!</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p class=\"text-success\">Your password has been changed successfully!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/identity/user/user-detail/user-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-detail/user-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/identity/user/user-detail/user-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-detail/user-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserDetail */ "./src/app/modules/identity/user/user-detail/UserDetail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.data = {};
        this.userDetail = new _UserDetail__WEBPACK_IMPORTED_MODULE_3__["UserDetail"]();
        this.lStorage = localStorage.length;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key = localStorage.getItem('tokenKey');
        var currentKey = JSON.parse(key);
        if (this.lStorage != 0) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentKey.access_token
                })
            };
            this.id = this.route.snapshot.paramMap.get('id');
            this.http.get('http://localhost:62772/api/user/detail?id=' + this.id, httpOptions).subscribe(function (result) {
                console.log(result);
                _this.data = result;
                _this.userDetail = _this.data;
            });
        }
    };
    UserDetailComponent.prototype.pageBack = function () {
        this.router.navigate(['home/account']);
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/modules/identity/user/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/modules/identity/user/user-detail/user-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/identity/user/user-edit/user-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-edit/user-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #myForm=\"ngForm\" name=\"myForm\">\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\" required email=\"true\">\r\n    <div [ngClass]=\"{'hidden': email.valid || email.pristine}\" class=\"validation-message\">\r\n      <div *ngIf=\"email?.errors?.required\">\r\n        Email is required.\r\n      </div>\r\n      <div *ngIf=\"email?.errors?.email\">\r\n        This is not valid email, email should be <i>abc@gmail.com</i>.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"phonenumber\">Phone Number</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"phonenumber\" [(ngModel)]=\"model.phoneNumber\" name=\"phonenumber\" #phonenumber=\"ngModel\" required>\r\n    <div [ngClass]=\"{'hidden': phonenumber.valid || phonenumber.pristine}\" class=\"validation-message\">\r\n      Phone number is required.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"role\">Role</label>\r\n    <select class=\"form-control\" id=\"role\" [(ngModel)]=\"model.role\" name=\"role\" #role=\"ngModel\" required>\r\n      <option value=\"Customer\">Customer</option>\r\n      <option value=\"Driver\">Driver</option>\r\n      <option value=\"Coordinator\">Coordinator</option>\r\n      <option value=\"Administrator\">Administrator</option>\r\n    </select>\r\n    <div [ngClass]=\"{'hidden': role.valid || role.pristine}\" class=\"validation-message\">\r\n      Role is required.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <button class=\"btn btn-success\" (click)=\"save(model.id)\">Save</button>\r\n    <button class=\"btn btn-primary\" (click)=\"back()\">Back</button>\r\n    {{message}}\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/identity/user/user-edit/user-edit.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-edit/user-edit.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/identity/user/user-edit/user-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-edit/user-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/dialog/notification.service */ "./src/app/shared/components/dialog/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(http, router, route, location, _notificationService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.location = location;
        this._notificationService = _notificationService;
        this.model = {
            email: '',
            phoneNumber: '',
            role: ''
        };
        this.data = {};
        this.id = {};
        this.message = null;
        this.isError = false;
        this.lStorage = localStorage.length;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key = localStorage.getItem('tokenKey');
        var currentKey = JSON.parse(key);
        if (this.lStorage != 0) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentKey.access_token
                })
            };
            this.id = this.route.snapshot.paramMap.get('id');
            this.http.get('http://localhost:62772/api/user/accounts/edit?id=' + this.id, httpOptions).subscribe(function (result) {
                if (result) {
                    console.log(result);
                    _this.model = result;
                }
            });
        }
    };
    UserEditComponent.prototype.save = function (id) {
        var _this = this;
        var key = localStorage.getItem('tokenKey');
        var currentKey = JSON.parse(key);
        if (this.lStorage != 0) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentKey.access_token
                })
            };
            id = this.route.snapshot.paramMap.get('id');
            this.http.put('http://localhost:62772/api/user/account/edit?id=' + id, this.model, httpOptions).subscribe(function (result) {
                if (result) {
                    _this.data = result;
                    console.log(_this.data);
                    _this.router.navigate(['account/detail', _this.data.value]);
                }
            }, function (error) {
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
    };
    UserEditComponent.prototype.back = function () {
        this.router.navigate(['account']);
    };
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/modules/identity/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/modules/identity/user/user-edit/user-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/identity/user/user-list/user-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-list/user-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>List account</h1>\r\n<button class=\"btn btn-success\" (click)=\"create()\">Create User</button>\r\n<div>\r\n  <select class=\"float-right\" [(ngModel)]=\"selectOption\" (ngModelChange)=\"loadList()\">\r\n    <option value=\"Customer\">Customer</option>\r\n    <option value=\"Driver\">Driver</option>\r\n    <option value=\"Coordinator\">Coordinator</option>\r\n    <option value=\"Administrator\">Administrator</option>\r\n  </select>\r\n</div>\r\n<div class=\"list clear\">\r\n  <table class=\"table table-hover\">\r\n    <thead id=\"head\">\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>User Name</th>\r\n        <th>Email</th>\r\n        <th>Phone Number</th>\r\n        <th>Status</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n      <tr *ngFor=\"let user of userList\">\r\n        <td>{{user.id}}</td>\r\n        <td>{{user.userName}}</td>\r\n        <td>{{user.email}}</td>\r\n        <td>{{user.phoneNumber}}</td>\r\n        <td>{{user.status}}</td>\r\n        <td>\r\n          <button class=\"btn btn-default\" (click)=\"loadDetail(user.id)\">Detail</button>\r\n          <span> </span>\r\n          <button class=\"btn btn-default\" (click)=\"loadUpdate(user.id)\">Edit</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/identity/user/user-list/user-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-list/user-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  margin-top: 10px;\n  border: 0.5px solid #000205; }\n\n#head {\n  color: black;\n  background-color: #f2f2f2; }\n\nh1 {\n  text-align: center;\n  color: #0073e6; }\n\n#mySelect {\n  margin-left: 1025px; }\n\n.btn {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/modules/identity/user/user-list/user-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-list/user-list.component.ts ***!
  \************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
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



var UserListComponent = /** @class */ (function () {
    function UserListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.data = {};
        this.selectOption = "";
        this.lStorage = localStorage.length;
        this.paginators = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.selectOption = 'Customer';
        this.loadList();
    };
    UserListComponent.prototype.loadList = function () {
        var _this = this;
        var key = localStorage.getItem('tokenKey');
        var currentKey = JSON.parse(key);
        if (this.lStorage != 0) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentKey.access_token
                })
            };
            console.log(this.selectOption);
            if (this.selectOption == 'Customer') {
                this.id = 1;
                this.http.get('http://localhost:62772/api/user/list?id=' + this.id, httpOptions).subscribe(function (result) {
                    _this.data = result;
                    _this.userList = _this.data;
                });
            }
            else if (this.selectOption == 'Driver') {
                this.id = 2;
                this.http.get('http://localhost:62772/api/user/userroles?id=' + this.id, httpOptions).subscribe(function (result) {
                    _this.data = result;
                    _this.userList = _this.data;
                });
            }
            else if (this.selectOption == 'Coordinator') {
                this.id = 3;
                this.http.get('http://localhost:62772/api/user/userroles?id=' + this.id, httpOptions).subscribe(function (result) {
                    _this.data = result;
                    _this.userList = _this.data;
                });
            }
            else {
                this.id = 4;
                this.http.get('http://localhost:62772/api/user/userroles?id=' + this.id, httpOptions).subscribe(function (result) {
                    _this.data = result;
                    _this.userList = _this.data;
                });
            }
        }
        //this.http.get('http://localhost:62772/api/user/userroles?id=' + id).subscribe(result => {
        //  this.data = result;
        //  this.userList = this.data;
        //});
    };
    UserListComponent.prototype.loadDetail = function (id) {
        this.router.navigate(['account/detail', id]);
    };
    UserListComponent.prototype.loadUpdate = function (id) {
        this.router.navigate(['account/edit', id]);
    };
    UserListComponent.prototype.create = function () {
        this.router.navigate(['account/create']);
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/modules/identity/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/modules/identity/user/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/modules/identity/user/user-profile-edit/user-profile-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-profile-edit/user-profile-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #myForm=\"ngForm\" name=\"myForm\">\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"username\">User Name</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"model.userName\" name=\"username\" #username=\"ngModel\" disabled>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\" required email=\"true\">\r\n    <div [ngClass]=\"{'hidden': email.valid || email.pristine}\" class=\"validation-message\">\r\n      <div *ngIf=\"email?.errors?.required\">\r\n        Email is required.\r\n      </div>\r\n      <div *ngIf=\"email?.errors?.email\">\r\n        This is not valid email, email should be <i>abc@gmail.com</i>.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <label for=\"phonenumber\">Phone Number</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"phonenumber\" [(ngModel)]=\"model.phoneNumber\" name=\"phonenumber\" #phonenumber=\"ngModel\" required>\r\n    <div [ngClass]=\"{'hidden': phonenumber.valid || phonenumber.pristine}\" class=\"validation-message\">\r\n      Phone number is required.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group col-md-5\">\r\n    <button class=\"btn btn-success\" (click)=\"save(model.id)\">Save</button>\r\n    <button class=\"btn btn-primary\" (click)=\"back()\">Back</button>\r\n    {{message}}\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/identity/user/user-profile-edit/user-profile-edit.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-profile-edit/user-profile-edit.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/identity/user/user-profile-edit/user-profile-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-profile-edit/user-profile-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileEditComponent", function() { return UserProfileEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/dialog/notification.service */ "./src/app/shared/components/dialog/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileEditComponent = /** @class */ (function () {
    function UserProfileEditComponent(_http, _router, _route, _location, _notificationService) {
        this._http = _http;
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._notificationService = _notificationService;
        this.id = {};
        this.model = {
            email: '',
            phoneNumber: ''
        };
        this.message = null;
        this.isError = false;
        this.lStorage = localStorage.length;
    }
    UserProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key = localStorage.getItem('tokenKey');
        var currentKey = JSON.parse(key);
        if (this.lStorage != 0) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentKey.access_token
                })
            };
            this.id = this._route.snapshot.paramMap.get('id');
            this._http.get('http://localhost:62772/api/user/edit/profile?id=' + this.id, httpOptions).subscribe(function (result) {
                console.log(result);
                _this.model = result;
            });
        }
    };
    UserProfileEditComponent.prototype.save = function (id) {
        var _this = this;
        var key = localStorage.getItem('tokenKey');
        var currentKey = JSON.parse(key);
        if (this.lStorage != 0) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentKey.access_token
                })
            };
            this._http.put('http://localhost:62772/api/user/edit/profile?id=' + id, this.model, httpOptions).subscribe(function (result) {
                if (result) {
                    _this._router.navigate(['home/profile']);
                }
            }, function (error) {
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
    };
    UserProfileEditComponent.prototype.back = function () {
        this._location.back();
    };
    UserProfileEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile-edit',
            template: __webpack_require__(/*! ./user-profile-edit.component.html */ "./src/app/modules/identity/user/user-profile-edit/user-profile-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-edit.component.scss */ "./src/app/modules/identity/user/user-profile-edit/user-profile-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], UserProfileEditComponent);
    return UserProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/identity/user/user-profile/UserProfile.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/identity/user/user-profile/UserProfile.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());



/***/ }),

/***/ "./src/app/modules/identity/user/user-profile/user-profile.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-profile/user-profile.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"border-custom\">\r\n    <h1>Profile</h1>\r\n  </div>\r\n  <div class=\"container pt-2\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-lg-3 \" align=\"center\">\r\n        <img alt=\"User Pic\" src=\"https://image.flaticon.com/icons/svg/3/3641.svg\" class=\"img-circle\">\r\n\r\n        <div class=\"d-flex justify-content-center pt-3\">\r\n          <input style=\"display: none\"\r\n                 type=\"file\" (change)=\"onFileChanged($event)\"\r\n                 #fileInput>\r\n          <button class=\"btn btn-primary\" (click)=\"fileInput.click()\" id=\"AUpload\">Upload your photo</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9 col-lg-9\">\r\n        <table class=\"table\">\r\n          <tbody>\r\n            <tr>\r\n              <th>Full name:</th>\r\n              <td>{{userProfile.userName}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Date of birth:</th>\r\n              <td>06/09/1996</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Email:</th>\r\n              <td>{{userProfile.email}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Phone number:</th>\r\n              <td>{{userProfile.phoneNumber}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Address:</th>\r\n              <td>132 Hàm Nghi, Quận 1, Tp. Hồ Chí Minh</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Join date:</th>\r\n              <td>{{userProfile.createdDate | date:'medium'}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"row justify-content-center\">\r\n          <!--<a href=\"#\" class=\"btn btn-primary btn-space\">Edit User</a>-->\r\n          <button class=\"btn btn-primary\" (click)=\"edit(userProfile.id)\">Edit</button>&nbsp;\r\n          <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#ChangePWDModal\">Change Password</button>&nbsp;\r\n          <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#DeactivateModal\">Deactivate</button>&nbsp;\r\n          <button class=\"btn btn-primary\" (click)=\"back()\">Back</button>&nbsp;\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Edit Modal-->\r\n<!--<div class=\"modal fade\" id=\"EditModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"EditModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"EditModalLabel\">Edit Profile</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"userProfileEdit.email\" name=\"email\" #email=\"ngModel\" required email=\"true\">\r\n            <div [ngClass]=\"{'hidden': email.valid || email.pristine}\" class=\"validation-message\">\r\n              <div *ngIf=\"email?.errors?.required\">\r\n                Email is required.\r\n              </div>\r\n              <div *ngIf=\"email?.errors?.email\">\r\n                This is not valid email, email should be <i>abc@gmail.com</i>.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"phonenumber\">Phone Number</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"phonenumber\" [(ngModel)]=\"userProfileEdit.phoneNumber\" name=\"phonenumber\" #phonenumber=\"ngModel\" required>\r\n            <div [ngClass]=\"{'hidden': phonenumber.valid || phonenumber.pristine}\" class=\"validation-message\">\r\n              Phone number is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-custom\" data-dismiss=\"modal\">Close</button>\r\n          <button id=\"btn-smessage\" class=\"btn btn-custom\"  (click)=\"confirm(userProfile.id)\" >Confirm</button>\r\n        </div>\r\n        <div [hidden]=\"!isError\" class=\"validation-message\">\r\n          {{message}}\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n\r\n<!--Edit Message Modal-->\r\n<!--<div class=\"modal fade\" id=\"EditMessage\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"EditMessage\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title \" id=\"EditMessageLabel\">Edit Success</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p class=\"text-success\">Your info has been changed successfully!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n\r\n<!--Deactivate Modal-->\r\n<div class=\"modal fade\" id=\"DeactivateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeactivateModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"DeactivateModalLabel\">Deactivate</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form>\r\n        <div class=\"modal-body\">\r\n          <p>Please fill your password to comfirm.</p>\r\n          <input class=\"form-control\" type=\"password\" id=\"Password\" name=\"Password\" placeholder=\"Password\" />\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-custom\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"submit\" class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#DeactivateMessage\">Confirm</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Deactivate Message Modal-->\r\n<div class=\"modal fade\" id=\"DeactivateMessage\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeactivateMessageLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"DeactivateMessageLabel\">Deactivate</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p class=\"text-danger\">You have 7 days remain before your account being deactivate!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--ChangePWD Modal-->\r\n<div class=\"modal fade\" id=\"ChangePWDModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ChangePWDModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"ChangePWDModalLabel\">Deactivate</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label for=\"CurrentPassword\">Current Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"CurrentPassword\" id=\"CurrentPassword\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"NewPassword\">New Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"NewPassword\" id=\"NewPassword\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"RePassword\">Re-Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"RePassword\" id=\"RePassword\">\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-custom\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"submit\" class=\"btn btn-custom\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#ChangePWDMessage\">Confirm</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--ChangePWD Message Modal-->\r\n<div class=\"modal fade\" id=\"ChangePWDMessage\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ChangePWDMessageLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title \" id=\"ChangePWDMessageLabel\">Password changed!</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p class=\"text-success\">Your password has been changed successfully!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/identity/user/user-profile/user-profile.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-profile/user-profile.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/identity/user/user-profile/user-profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/identity/user/user-profile/user-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserProfile */ "./src/app/modules/identity/user/user-profile/UserProfile.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/dialog/notification.service */ "./src/app/shared/components/dialog/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(_http, _router, _route, _location, _notificationService) {
        this._http = _http;
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._notificationService = _notificationService;
        this.data = {};
        this.userProfile = new _UserProfile__WEBPACK_IMPORTED_MODULE_3__["UserProfile"]();
        this.lStorage = localStorage.length;
        this.message = null;
        this.isError = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key = localStorage.getItem('tokenKey');
        var currentKey = JSON.parse(key);
        if (this.lStorage != 0) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentKey.access_token
                })
            };
            this._http.get('http://localhost:62772/api/user/profile', httpOptions).subscribe(function (result) {
                _this.data = result;
                _this.userProfile = _this.data;
                //this.userProfileEdit = JSON.parse(JSON.stringify(this.userProfile));
            });
        }
    };
    //confirm(id) {
    //  var key = localStorage.getItem('tokenKey');
    //  var currentKey = JSON.parse(key);
    //  if (this.lStorage != 0) {
    //    var httpOptions = {
    //      headers: new HttpHeaders({
    //        'Content-Type': 'application/json',
    //        'Authorization': 'Bearer ' + currentKey.access_token
    //      })
    //    };
    //    this._http.put('http://localhost:62772/api/user/edit/profile?id=' + id, this.userProfileEdit, httpOptions).subscribe(result => {
    //      if (result) {
    //        this.userProfile = JSON.parse(JSON.stringify(this.userProfileEdit));
    //        this.data = result;
    //        //this._renderer.setElementAttribute(this._el, 'data-dismiss', 'modal');
    //        //this._renderer.setElementAttribute(this._el, 'data-toggle', 'modal');
    //        //this._renderer.setElementAttribute(this._el, 'data-target', '#EditMessage');
    //        //this._router.navigate(['home/profile']);
    //        $('#btn-smessage').attr('data-target','#EditMessage')
    //      }
    //    }, error => {
    //      this.isError = true;
    //      let httpError: HttpErrorResponse = error;
    //      if (httpError.status === 400) {
    //        this.message = httpError.error.message;
    //      } else {
    //        this._notificationService.prompError(httpError.message);
    //      }
    //    });
    //  }
    //}
    UserProfileComponent.prototype.edit = function (id) {
        this._router.navigate(['home/profile/edit', id]);
    };
    UserProfileComponent.prototype.back = function () {
        this._location.back();
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/modules/identity/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/modules/identity/user/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            src_app_shared_components_dialog_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/identity/user/user.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/identity/user/user.module.ts ***!
  \******************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/modules/identity/user/user-list/user-list.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/modules/identity/user/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/modules/identity/user/user-detail/user-detail.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/modules/identity/user/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/modules/identity/user/user-edit/user-edit.component.ts");
/* harmony import */ var _user_profile_edit_user_profile_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile-edit/user-profile-edit.component */ "./src/app/modules/identity/user/user-profile-edit/user-profile-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], _user_profile_edit_user_profile_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileEditComponent"]]
        })
    ], UserModule);
    return UserModule;
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

/***/ "./src/app/shared/services/authservices/auth-guard.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/authservices/auth-guard.service.ts ***!
  \********************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/authservices/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/services/authservices/auth.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/authservices/auth.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('tokenKey');
        // Check whether the token is expired and return
        // true or false
        if (token != null && token != "undefined") {
            var tokenKey = JSON.parse(token);
            var currentToken = tokenKey.access_token;
            return !this.jwtHelper.isTokenExpired(currentToken);
        }
        return false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/roleguardservice/role-guard.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/services/roleguardservice/role-guard.service.ts ***!
  \************************************************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authservices_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authservices/auth.service */ "./src/app/shared/services/authservices/auth.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleGuardService = /** @class */ (function () {
    function RoleGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RoleGuardService.prototype.canActivate = function (route) {
        // this will be passed from the route config
        // on the data property
        var expectedRole = route.data.expectedRole;
        var token = localStorage.getItem('tokenKey');
        var tokenKey = JSON.parse(token);
        //const currentToken = JSON.stringify(tokenKey.access_token);
        // decode the token to get its payload
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(tokenKey.access_token);
        if (!this.auth.isAuthenticated() ||
            tokenPayload.role !== expectedRole) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    RoleGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authservices_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuardService);
    return RoleGuardService;
}());



/***/ }),

/***/ "./src/app/shipment/ShipmentAssigned/assigned.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shipment/ShipmentAssigned/assigned.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>List shipment</h1>\r\n<div class=\"list\">\r\n  <table class=\"table table-hover\">\r\n    <thead id=\"head\">\r\n      <tr>\r\n        <th>ShipmentCode</th>\r\n        <th>License plate</th>\r\n        <th>StartDate</th>\r\n        <th>EndDate</th>\r\n        <th>RequestQuality</th>\r\n        <th>Assign</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n      <tr *ngFor=\"let item of shipmentAssigned\"  >\r\n        <td>{{item.code}}</td>\r\n        <td>{{item.licensePlate}}</td>\r\n        <td>{{item.startDate}}</td>\r\n        <td>{{item.status}}</td>\r\n        <td>{{item.requestQuality}}</td>\r\n        <td>\r\n          <a *ngIf=\"item.status == 'Pending' || item.status == 'Reject'\" class=\"btn btn-outline-success\" (click)=\"changeStatus(item.code, 'Accept')\">Accept</a>\r\n          <a *ngIf=\"item.status == 'Pending'\" class=\"btn btn-outline-danger\" (click)=\"changeStatus(item.code, 'Reject')\">Reject</a>\r\n          <a *ngIf=\"item.status == 'Accept'\" class=\"btn btn-outline-primary\" (click)=\"changeStatus(item.code, 'Picking')\">Picking</a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

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
        this.http.get('http://localhost:62772/api/Driver/shipmentAssigned?id=54').subscribe(function (result) {
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
        this.http.post('http://localhost:62772/api/Driver/shipmentfeedback', param, httpOptions).subscribe(function (result) {
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

module.exports = __webpack_require__(/*! D:\MyData\GrooveIntern\MiniProject\GoGo\Applications\GoGoSpa\Client-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map