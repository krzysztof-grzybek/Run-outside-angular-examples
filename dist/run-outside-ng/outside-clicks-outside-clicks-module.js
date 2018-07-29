(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outside-clicks-outside-clicks-module"],{

/***/ "./src/app/outside-clicks/dropdown-optimized/dropdown-optimized.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/outside-clicks/dropdown-optimized/dropdown-optimized.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown {\r\n    position: absolute;\r\n    top: 100%;\r\n}\r\n\r\n.dropdown ul {\r\n    width: 100px;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: grey;\r\n    border: 1px solid #333;\r\n    list-style: none;\r\n}\r\n\r\n.dropdown ul li {\r\n    padding: 3px;\r\n    border-bottom: 1px solid #333;\r\n}\r\n\r\n.dropdown ul li:last-child {\r\n    border: 0;\r\n}"

/***/ }),

/***/ "./src/app/outside-clicks/dropdown-optimized/dropdown-optimized.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/outside-clicks/dropdown-optimized/dropdown-optimized.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"openDropdown()\">Open dropdown</button>\n<div *ngIf=\"dropdownOpened\" class=\"dropdown\">\n  <ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/outside-clicks/dropdown-optimized/dropdown-optimized.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/outside-clicks/dropdown-optimized/dropdown-optimized.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DropdownOptimizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownOptimizedComponent", function() { return DropdownOptimizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownOptimizedComponent = /** @class */ (function () {
    function DropdownOptimizedComponent(elRef, ngZone, document) {
        this.elRef = elRef;
        this.ngZone = ngZone;
        this.document = document;
        this.dropdownOpened = false;
    }
    DropdownOptimizedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.document.addEventListener('click', _this.onDocumentClick.bind(_this));
        });
    };
    DropdownOptimizedComponent.prototype.openDropdown = function () {
        this.dropdownOpened = true;
    };
    DropdownOptimizedComponent.prototype.onDocumentClick = function (e) {
        var _this = this;
        if (!this.elRef.nativeElement.contains(e.target) && this.dropdownOpened) {
            this.ngZone.run(function () {
                _this.dropdownOpened = false;
            });
        }
    };
    DropdownOptimizedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown-optimized',
            template: __webpack_require__(/*! ./dropdown-optimized.component.html */ "./src/app/outside-clicks/dropdown-optimized/dropdown-optimized.component.html"),
            styles: [__webpack_require__(/*! ./dropdown-optimized.component.css */ "./src/app/outside-clicks/dropdown-optimized/dropdown-optimized.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], Object])
    ], DropdownOptimizedComponent);
    return DropdownOptimizedComponent;
}());



/***/ }),

/***/ "./src/app/outside-clicks/dropdown/dropdown.component.css":
/*!****************************************************************!*\
  !*** ./src/app/outside-clicks/dropdown/dropdown.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown {\r\n    position: absolute;\r\n    top: 100%;\r\n}\r\n\r\n.dropdown ul {\r\n    width: 100px;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: grey;\r\n    border: 1px solid #333;\r\n    list-style: none;\r\n}\r\n\r\n.dropdown ul li {\r\n    padding: 3px;\r\n    border-bottom: 1px solid #333;\r\n}\r\n\r\n.dropdown ul li:last-child {\r\n    border: 0;\r\n}"

/***/ }),

/***/ "./src/app/outside-clicks/dropdown/dropdown.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/outside-clicks/dropdown/dropdown.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"openDropdown()\">Open dropdown</button>\n<div *ngIf=\"dropdownOpened\" class=\"dropdown\">\n  <ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/outside-clicks/dropdown/dropdown.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/outside-clicks/dropdown/dropdown.component.ts ***!
  \***************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
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

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(elRef) {
        this.elRef = elRef;
        this.dropdownOpened = false;
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent.prototype.openDropdown = function () {
        this.dropdownOpened = true;
    };
    DropdownComponent.prototype.onDocumentClick = function (e) {
        if (!this.elRef.nativeElement.contains(e.target)) {
            this.dropdownOpened = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], DropdownComponent.prototype, "onDocumentClick", null);
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/outside-clicks/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./src/app/outside-clicks/dropdown/dropdown.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/outside-clicks/main/main.component.css":
/*!********************************************************!*\
  !*** ./src/app/outside-clicks/main/main.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/outside-clicks/main/main.component.html":
/*!*********************************************************!*\
  !*** ./src/app/outside-clicks/main/main.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"t-center\">\n    <button (click)=\"showRegular()\" [class.active]=\"!displayOptimized\">Show regular</button>\n    <button (click)=\"showOptimized()\" [class.active]=\"displayOptimized\">Show optimized</button>\n    <div *ngIf=\"!displayOptimized\">\n        <app-dropdown></app-dropdown>\n        <app-dropdown></app-dropdown>\n        <app-dropdown></app-dropdown>\n    </div>\n    <div *ngIf=\"displayOptimized\">\n        <app-dropdown-optimized></app-dropdown-optimized>\n        <app-dropdown-optimized></app-dropdown-optimized>\n        <app-dropdown-optimized></app-dropdown-optimized>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/outside-clicks/main/main.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/outside-clicks/main/main.component.ts ***!
  \*******************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.displayOptimized = false;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.showOptimized = function () {
        this.displayOptimized = true;
    };
    MainComponent.prototype.showRegular = function () {
        this.displayOptimized = false;
    };
    MainComponent.prototype.ngAfterViewChecked = function () {
        console.log('Change detection triggered!');
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/outside-clicks/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/outside-clicks/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/outside-clicks/outside-clicks-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/outside-clicks/outside-clicks-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OutsideClicksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideClicksRoutingModule", function() { return OutsideClicksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/outside-clicks/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }
];
var OutsideClicksRoutingModule = /** @class */ (function () {
    function OutsideClicksRoutingModule() {
    }
    OutsideClicksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OutsideClicksRoutingModule);
    return OutsideClicksRoutingModule;
}());



/***/ }),

/***/ "./src/app/outside-clicks/outside-clicks.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/outside-clicks/outside-clicks.module.ts ***!
  \*********************************************************/
/*! exports provided: OutsideClicksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideClicksModule", function() { return OutsideClicksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _outside_clicks_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outside-clicks-routing.module */ "./src/app/outside-clicks/outside-clicks-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/outside-clicks/main/main.component.ts");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/outside-clicks/dropdown/dropdown.component.ts");
/* harmony import */ var _dropdown_optimized_dropdown_optimized_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown-optimized/dropdown-optimized.component */ "./src/app/outside-clicks/dropdown-optimized/dropdown-optimized.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OutsideClicksModule = /** @class */ (function () {
    function OutsideClicksModule() {
    }
    OutsideClicksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _outside_clicks_routing_module__WEBPACK_IMPORTED_MODULE_2__["OutsideClicksRoutingModule"]
            ],
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], _dropdown_optimized_dropdown_optimized_component__WEBPACK_IMPORTED_MODULE_5__["DropdownOptimizedComponent"]]
        })
    ], OutsideClicksModule);
    return OutsideClicksModule;
}());



/***/ })

}]);
//# sourceMappingURL=outside-clicks-outside-clicks-module.js.map