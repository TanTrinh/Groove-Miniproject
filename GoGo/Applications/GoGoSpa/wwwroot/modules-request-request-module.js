(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-request-request-module"],{

/***/ "./src/app/modules/request/request-form/request-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/request/request-form/request-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"border-custom\">\r\n    <h1 [hidden]=\"!isCreateFormMode\">Create Request</h1>\r\n    <h1 [hidden]=\"!isUpdateFormMode\">Update Request</h1>\r\n    <h1 [hidden]=\"!isViewFormMode\">Request Detail</h1>\r\n  </div>\r\n  <div class=\"container-fluid pt-3\">\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-lg-4\">\r\n        <form #mainForm=\"ngForm\" name=\"mainForm\" (ngSubmit)=\"onSubmitForm(mainForm)\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"receiverName\">Receiver Name </label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.receiverName\" name=\"receiverName\" #receiverName=\"ngModel\" required [disabled]=\"isViewFormMode\">\r\n            <div *ngIf=\"receiverName.invalid && (receiverName.dirty || receiverName.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"receiverName.errors.required\">\r\n                Receiver Name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"receiverPhoneNumber\">Receiver PhoneNumber</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.receiverPhoneNumber\" name=\"receiverPhoneNumber\" #receiverPhoneNumber=\"ngModel\" required [disabled]=\"isViewFormMode\">\r\n            <div *ngIf=\"receiverPhoneNumber.invalid && (receiverPhoneNumber.dirty || receiverPhoneNumber.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"receiverPhoneNumber.errors.required\">\r\n                Receiver PhoneNumber is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"packageQuantity\">Package Quantity</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.packageQuantity\" name=\"packageQuantity\" #packageQuantity=\"ngModel\" required [disabled]=\"isViewFormMode\">\r\n            <div *ngIf=\"packageQuantity.invalid && (packageQuantity.dirty || packageQuantity.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"packageQuantity.errors.required\">\r\n                Package Quantity is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"pickingDate\">Picking Date</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"formData.pickingDate\" name=\"pickingDate\" #pickingDate=\"ngModel\" required [disabled]=\"isViewFormMode\">\r\n            <div *ngIf=\"pickingDate.invalid && (pickingDate.dirty || pickingDate.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"pickingDate.errors.required\">\r\n                Picking Date is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"DeliveryDate\">Expected Date</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"formData.expectedDate\" name=\"expectedDate\" #expectedDate=\"ngModel\" required [disabled]=\"isViewFormMode\">\r\n            <div *ngIf=\"expectedDate.invalid && (expectedDate.dirty || expectedDate.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"expectedDate.errors.required\">\r\n                Expected Date is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"!isViewFormMode\">\r\n            <label for=\"wareHouseId\">Warehouse</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"formData.wareHouseId\" name=\"wareHouseId\" #wareHouseId=\"ngModel\" [disabled]=\"isViewFormMode\" required>\r\n              <option selected hidden>Choose here...</option>\r\n              <option *ngFor=\"let item of formDataSource.WarehouseList\" value=\"{{item.id}}\">{{item.nameWarehouse}}</option>\r\n            </select>\r\n            <div *ngIf=\"wareHouseId.invalid && (wareHouseId.dirty || wareHouseId.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"wareHouseId.errors.required\">\r\n                Warehouse is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"isViewFormMode\">\r\n            <label for=\"address\">Warehouse</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.wareHouseId\" name=\"wareHouseId\" #wareHouseId=\"ngModel\" required [disabled]=\"true\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"address\">Delivery Address</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.address\" name=\"address\" #address=\"ngModel\" required [disabled]=\"isViewFormMode\">\r\n            <div *ngIf=\"address.invalid && (address.dirty || address.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"address.errors.required\">\r\n                Delivery Address is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"deliveryLatitude\">Delivery Latitude</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.deliveryLatitude\" name=\"deliveryLatitude\" #deliveryLatitude=\"ngModel\" required [disabled]=\"isViewFormMode\">\r\n            <div *ngIf=\"deliveryLatitude.invalid && (deliveryLatitude.dirty || deliveryLatitude.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"deliveryLatitude.errors.required\">\r\n                Delivery Latitude is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group \">\r\n            <label for=\"deliveryLongitude\">Delivery Longitude</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.deliveryLongitude\" name=\"deliveryLongitude\" #deliveryLongitude=\"ngModel\" required [disabled]=\"isViewFormMode\">\r\n            <div *ngIf=\"deliveryLongitude.invalid && (deliveryLongitude.dirty || deliveryLongitude.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"deliveryLongitude.errors.required\">\r\n                Delivery Longitude is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn-wrapper\">\r\n            <!-- Create / View -->\r\n            <button *ngIf=\"!isUpdateFormMode\" type=\"submit\" class=\"btn btn-custom mr-1\" (click)=\"onNavigateToListPage()\">Back to List</button>\r\n\r\n            <!-- Update -->\r\n            <button *ngIf=\"isUpdateFormMode\" type=\"submit\" class=\"btn btn-custom mr-1\" (click)=\"onNavigateToViewPage()\">Cancel</button>\r\n\r\n            <!-- Create / Update -->\r\n            <button *ngIf=\"!isViewFormMode\" type=\"submit\" class=\"btn btn-custom\">Save</button>\r\n\r\n            <!-- View -->\r\n            <button *ngIf=\"isViewFormMode\" routerLink=\"/request/form/update/{{formData?.id}}\" class=\"btn btn-custom\">Update</button>\r\n\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-8 col-lg-8 \">\r\n        <p>Map here!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/request/request-form/request-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/request/request-form/request-form.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/request/request-form/request-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/request/request-form/request-form.component.ts ***!
  \************************************************************************/
/*! exports provided: RequestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestFormComponent", function() { return RequestFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_component_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/component/form */ "./src/app/shared/component/form/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_component_dialog_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/dialog/notification.service */ "./src/app/shared/component/dialog/notification.service.ts");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request.service */ "./src/app/modules/request/request.service.ts");
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





var RequestFormComponent = /** @class */ (function (_super) {
    __extends(RequestFormComponent, _super);
    function RequestFormComponent(route, router, requestService, notificationService, validationService, _notificationService) {
        var _this = _super.call(this, route, router, notificationService, requestService, validationService) || this;
        _this.route = route;
        _this.router = router;
        _this.requestService = requestService;
        _this.notificationService = notificationService;
        _this.validationService = validationService;
        _this._notificationService = _notificationService;
        _this.formConfiguration.dataSourceMapper.add('WarehouseList', requestService);
        _super.prototype.formOnInit.call(_this, "Request", {});
        return _this;
    }
    RequestFormComponent.prototype.ngOnInit = function () {
    };
    RequestFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-form',
            template: __webpack_require__(/*! ./request-form.component.html */ "./src/app/modules/request/request-form/request-form.component.html"),
            styles: [__webpack_require__(/*! ./request-form.component.scss */ "./src/app/modules/request/request-form/request-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"],
            _shared_component_dialog_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _shared_component_form__WEBPACK_IMPORTED_MODULE_1__["FormValidationService"],
            _shared_component_dialog_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], RequestFormComponent);
    return RequestFormComponent;
}(_shared_component_form__WEBPACK_IMPORTED_MODULE_1__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/modules/request/request-list/request-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/request/request-list/request-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"border-custom\">\r\n    <h1>Request Management</h1>\r\n  </div>\r\n  <div class=\"py-3\">\r\n    <button class=\"btn btn-success\" routerLink=\"/request/form/create\">Create Request</button>\r\n  </div>\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Adress</th>\r\n        <th>Phone Number</th>\r\n        <th>Owner</th>\r\n        <th>GPS</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>001</td>\r\n        <td>132 Hàm Nghi, Quận 1, TP.Hồ Chí Minh</td>\r\n        <td>0169696969</td>\r\n        <td>Nguyễn Văn Tư</td>\r\n        <td>...</td>\r\n        <td>\r\n          <button class=\"btn btn-custom\" routerLink=\"/request/edit\">Edit</button> &nbsp;\r\n          <button class=\"btn btn-custom\" data-toggle=\"modal\" data-target=\"#CancelModal\">Delete</button>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>001</td>\r\n        <td>132 Hàm Nghi, Quận 1, TP.Hồ Chí Minh</td>\r\n        <td>0169696969</td>\r\n        <td>Nguyễn Văn Tư</td>\r\n        <td>...</td>\r\n        <td>\r\n          <button class=\"btn btn-custom\" routerLink=\"/request/edit\">Edit</button> &nbsp;\r\n          <button class=\"btn btn-custom\" data-toggle=\"modal\" data-target=\"#CancelModal\">Delete</button>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>001</td>\r\n        <td>132 Hàm Nghi, Quận 1, TP.Hồ Chí Minh</td>\r\n        <td>0169696969</td>\r\n        <td>Nguyễn Văn Tư</td>\r\n        <td>...</td>\r\n        <td>\r\n          <button class=\"btn btn-custom\" routerLink=\"/request/edit\">Edit</button> &nbsp;\r\n          <button class=\"btn btn-custom\" data-toggle=\"modal\" data-target=\"#CancelModal\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <!--Cancel Modal-->\r\n  <div class=\"modal fade\" id=\"CancelModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"CancelModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"CancelModalLabel\">Cancel</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          Are you sure?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Confirm</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/request/request-list/request-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/request/request-list/request-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/request/request-list/request-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/request/request-list/request-list.component.ts ***!
  \************************************************************************/
/*! exports provided: RequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListComponent", function() { return RequestListComponent; });
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

var RequestListComponent = /** @class */ (function () {
    function RequestListComponent() {
    }
    RequestListComponent.prototype.ngOnInit = function () {
    };
    RequestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-list',
            template: __webpack_require__(/*! ./request-list.component.html */ "./src/app/modules/request/request-list/request-list.component.html"),
            styles: [__webpack_require__(/*! ./request-list.component.scss */ "./src/app/modules/request/request-list/request-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestListComponent);
    return RequestListComponent;
}());



/***/ }),

/***/ "./src/app/modules/request/request-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/request/request-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRoutingModule", function() { return RequestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-list/request-list.component */ "./src/app/modules/request/request-list/request-list.component.ts");
/* harmony import */ var _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-form/request-form.component */ "./src/app/modules/request/request-form/request-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'list', component: _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_2__["RequestListComponent"] },
    { path: 'form/:mode/:id', component: _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_3__["RequestFormComponent"] },
    { path: 'form/:mode', component: _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_3__["RequestFormComponent"] } // Create
];
var RequestRoutingModule = /** @class */ (function () {
    function RequestRoutingModule() {
    }
    RequestRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], RequestRoutingModule);
    return RequestRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/request/request.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/request/request.module.ts ***!
  \***************************************************/
/*! exports provided: RequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModule", function() { return RequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-list/request-list.component */ "./src/app/modules/request/request-list/request-list.component.ts");
/* harmony import */ var _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-form/request-form.component */ "./src/app/modules/request/request-form/request-form.component.ts");
/* harmony import */ var _request_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-routing.module */ "./src/app/modules/request/request-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RequestModule = /** @class */ (function () {
    function RequestModule() {
    }
    RequestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _request_routing_module__WEBPACK_IMPORTED_MODULE_4__["RequestRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            declarations: [
                _request_list_request_list_component__WEBPACK_IMPORTED_MODULE_2__["RequestListComponent"],
                _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_3__["RequestFormComponent"],
            ]
        })
    ], RequestModule);
    return RequestModule;
}());



/***/ }),

/***/ "./src/app/modules/request/request.service.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/request/request.service.ts ***!
  \****************************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
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
    function RequestService(_apiHttp) {
        this._apiHttp = _apiHttp;
    }
    RequestService.prototype.getDataSource = function () {
        return this._apiHttp.get("/api/warehouse/customer/77"); //get id from claim
    };
    RequestService.prototype.edit = function (id, formData) {
        return this._apiHttp.put("/api/request/" + id, formData);
    };
    RequestService.prototype.getFormData = function (id) {
        return this._apiHttp.get("/api/request/" + id);
    };
    RequestService.prototype.create = function (formData) {
        console.log(formData);
        return this._apiHttp.post("/api/request", formData);
    };
    RequestService.prototype.getViewFormUrl = function (id) {
        return "/request/form/view/" + id;
    };
    RequestService.prototype.getListPageUrl = function () {
        return "/request/list";
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["AuthHttpService"]])
    ], RequestService);
    return RequestService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-request-request-module.js.map