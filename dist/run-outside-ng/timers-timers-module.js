(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timers-timers-module"],{

/***/ "./src/app/timers/canvas-optimized/canvas-optimized.component.css":
/*!************************************************************************!*\
  !*** ./src/app/timers/canvas-optimized/canvas-optimized.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timers/canvas-optimized/canvas-optimized.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/timers/canvas-optimized/canvas-optimized.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #canvas width=\"100\" height=\"100\"></canvas>"

/***/ }),

/***/ "./src/app/timers/canvas-optimized/canvas-optimized.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/timers/canvas-optimized/canvas-optimized.component.ts ***!
  \***********************************************************************/
/*! exports provided: CanvasOptimizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasOptimizedComponent", function() { return CanvasOptimizedComponent; });
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

;
var CanvasOptimizedComponent = /** @class */ (function () {
    function CanvasOptimizedComponent(ngZone) {
        this.ngZone = ngZone;
        this.color = {
            r: 255,
            g: 0,
            b: 0,
        };
        this.stagePhase = 0;
    }
    CanvasOptimizedComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.interval = window.setInterval(function () {
                _this.setNextColor();
                _this.paint();
            }, 10);
        });
    };
    CanvasOptimizedComponent.prototype.setNextColor = function () {
        switch (this.stagePhase) {
            case 0:
                this.color.g++;
                if (this.color.g === 255)
                    this.stagePhase++;
                break;
            case 1:
                this.color.r--;
                if (this.color.r === 0)
                    this.stagePhase++;
                break;
            case 2:
                this.color.b++;
                if (this.color.b === 255)
                    this.stagePhase++;
                break;
            case 3:
                this.color.g--;
                if (this.color.g === 0)
                    this.stagePhase++;
                break;
            case 4:
                this.color.r++;
                if (this.color.r === 255)
                    this.stagePhase++;
                break;
            case 5:
                this.color.b--;
                if (this.color.b === 0)
                    this.stagePhase = 0;
                break;
        }
    };
    CanvasOptimizedComponent.prototype.paint = function () {
        var el = this.canvas.nativeElement;
        var ctx = el.getContext('2d');
        ctx.fillStyle = "rgb(" + this.color.r + ", " + this.color.g + ", " + this.color.b + ")";
        ctx.fillRect(0, 0, el.width, el.height);
    };
    CanvasOptimizedComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CanvasOptimizedComponent.prototype, "canvas", void 0);
    CanvasOptimizedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas-optimized',
            template: __webpack_require__(/*! ./canvas-optimized.component.html */ "./src/app/timers/canvas-optimized/canvas-optimized.component.html"),
            styles: [__webpack_require__(/*! ./canvas-optimized.component.css */ "./src/app/timers/canvas-optimized/canvas-optimized.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CanvasOptimizedComponent);
    return CanvasOptimizedComponent;
}());



/***/ }),

/***/ "./src/app/timers/canvas/canvas.component.css":
/*!****************************************************!*\
  !*** ./src/app/timers/canvas/canvas.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timers/canvas/canvas.component.html":
/*!*****************************************************!*\
  !*** ./src/app/timers/canvas/canvas.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #canvas width=\"100\" height=\"100\"></canvas>"

/***/ }),

/***/ "./src/app/timers/canvas/canvas.component.ts":
/*!***************************************************!*\
  !*** ./src/app/timers/canvas/canvas.component.ts ***!
  \***************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
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

;
var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(ngZone) {
        this.ngZone = ngZone;
        this.color = {
            r: 255,
            g: 0,
            b: 0,
        };
        this.stagePhase = 0;
    }
    CanvasComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.interval = window.setInterval(function () {
            _this.setNextColor();
            _this.paint();
        }, 10);
    };
    CanvasComponent.prototype.setNextColor = function () {
        switch (this.stagePhase) {
            case 0:
                this.color.g++;
                if (this.color.g === 255)
                    this.stagePhase++;
                break;
            case 1:
                this.color.r--;
                if (this.color.r === 0)
                    this.stagePhase++;
                break;
            case 2:
                this.color.b++;
                if (this.color.b === 255)
                    this.stagePhase++;
                break;
            case 3:
                this.color.g--;
                if (this.color.g === 0)
                    this.stagePhase++;
                break;
            case 4:
                this.color.r++;
                if (this.color.r === 255)
                    this.stagePhase++;
                break;
            case 5:
                this.color.b--;
                if (this.color.b === 0)
                    this.stagePhase = 0;
                break;
        }
    };
    CanvasComponent.prototype.paint = function () {
        var el = this.canvas.nativeElement;
        var ctx = el.getContext('2d');
        ctx.fillStyle = "rgb(" + this.color.r + ", " + this.color.g + ", " + this.color.b + ")";
        ctx.fillRect(0, 0, el.width, el.height);
    };
    CanvasComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CanvasComponent.prototype, "canvas", void 0);
    CanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/timers/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.css */ "./src/app/timers/canvas/canvas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/timers/main/main.component.css":
/*!************************************************!*\
  !*** ./src/app/timers/main/main.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timers/main/main.component.html":
/*!*************************************************!*\
  !*** ./src/app/timers/main/main.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"t-center\">\n  <button (click)=\"setZone(true)\" [class.active]=\"inZone\">Show regular</button>\n  <button (click)=\"setZone(false)\" [class.active]=\"!inZone\">Show optimized</button>\n</div>\n\n<div class=\"t-center\">\n  <ng-container *ngIf=\"inZone\">\n    <app-canvas></app-canvas>\n  </ng-container>\n  <ng-container *ngIf=\"!inZone\">\n    <app-canvas-optimized></app-canvas-optimized>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/timers/main/main.component.ts":
/*!***********************************************!*\
  !*** ./src/app/timers/main/main.component.ts ***!
  \***********************************************/
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
        this.inZone = true;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.ngAfterViewChecked = function () {
        console.log('Change detection triggered!');
    };
    MainComponent.prototype.setZone = function (inZone) {
        this.inZone = inZone;
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/timers/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/timers/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/timers/timers-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/timers/timers-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TimersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimersRoutingModule", function() { return TimersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/timers/main/main.component.ts");
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
var TimersRoutingModule = /** @class */ (function () {
    function TimersRoutingModule() {
    }
    TimersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TimersRoutingModule);
    return TimersRoutingModule;
}());



/***/ }),

/***/ "./src/app/timers/timers.module.ts":
/*!*****************************************!*\
  !*** ./src/app/timers/timers.module.ts ***!
  \*****************************************/
/*! exports provided: TimersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimersModule", function() { return TimersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timers-routing.module */ "./src/app/timers/timers-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/timers/main/main.component.ts");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/timers/canvas/canvas.component.ts");
/* harmony import */ var _canvas_optimized_canvas_optimized_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas-optimized/canvas-optimized.component */ "./src/app/timers/canvas-optimized/canvas-optimized.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TimersModule = /** @class */ (function () {
    function TimersModule() {
    }
    TimersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _timers_routing_module__WEBPACK_IMPORTED_MODULE_2__["TimersRoutingModule"]
            ],
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__["CanvasComponent"], _canvas_optimized_canvas_optimized_component__WEBPACK_IMPORTED_MODULE_5__["CanvasOptimizedComponent"]]
        })
    ], TimersModule);
    return TimersModule;
}());



/***/ })

}]);
//# sourceMappingURL=timers-timers-module.js.map