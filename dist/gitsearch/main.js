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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");






var routes = [
    { path: "userprofile", component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_4__["UserprofileComponent"] },
    { path: "", redirectTo: "/homepage", pathMatch: "full" },
    { path: "homepage", component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gitsearch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userservice.service */ "./src/app/userservice.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");












var routes = [
    { path: "userprofile", component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_8__["UserprofileComponent"] },
    { path: "", redirectTo: "/homepage", pathMatch: "full" },
    { path: "homepage", component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_8__["UserprofileComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes),
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_10__["RoutingModule"]
            ],
            providers: [_userservice_service__WEBPACK_IMPORTED_MODULE_4__["UserserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\n    \n    font-family: 'Patrick Hand', cursive;\n    color: white;\n    font-size: 25px;\n    font-weight: normal;\n    \n}\nh1 {\n    font-size: 60px;\n    color: white;\n    text-align: center\n}\n.image {\n  margin-left: 40%;\n  margin-bottom: 70px;\n}\n#contactdetails {\n    margin-top: 30px;\n    font-size: 25px;\n}\n.copy {\n    margin-top: 30px;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaO0FBQ0o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZSB7XG4gICAgXG4gICAgZm9udC1mYW1pbHk6ICdQYXRyaWNrIEhhbmQnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBcbn1cbmgxIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuLmltYWdlIHtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbiNjb250YWN0ZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uY29weSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"home\">\n    <div class=\"container\">\n     \n       <h1>Git Search</h1>\n       <img class=\"image\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmTi3mc6YKXUpoBsgMk7fMCTJiBAb3O0TgXIqvkuOa-OV4P3L\" alt=\"\" width=\"200px\">\n     \n      <br>\n  <div style=\"text-align: center;\">\n       <p style=\"text-align: center;\">No more wondering what other developers are up to, just check them out below.</p>\n       <a routerLink='/userprofile' routerLinkActive='active'><button>GO</button></a>\n    <div id=\"contactdeatils\">\n     <h3>Contacts:</h3>\n     <a href=\"\"><img src=\"https://image.flaticon.com/icons/svg/185/185981.svg\" alt=\"\" width=\"40px\" height=\"40px\"> </a>\n     <a href=\"\"><img src=\"https://image.flaticon.com/icons/svg/185/185961.svg\" alt=\"\" width=\"40px\" height=\"40px\"> </a>\n     <a href=\"\"><img src=\"https://image.flaticon.com/icons/svg/1409/1409946.svg\" alt=\"\" width=\"40px\" height=\"40px\"> </a>\n    </div>\n  \n    </div>\n  </div>\n  <div class=\"copy\">\n      <p style=\"text-align: center;\">&copy; Copyright Sharon Maswai</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n    margin-right: 300px;\n    margin-left: 300px;\n    margin-top: 300px;\n}\nh2 {\n    font-family: 'Patrick Hand', cursive;\n    font-size: 85px;\n    color: blanchedalmond;\n}\n#link {\n    color: blanchedalmond;\n    size: 35px;\n    font-family: 'Patrick Hand', cursive;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixvQ0FBb0M7O0FBRXhDIiwiZmlsZSI6InNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcbn1cbmgyIHtcbiAgICBmb250LWZhbWlseTogJ1BhdHJpY2sgSGFuZCcsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA4NXB4O1xuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbn1cbiNsaW5rIHtcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG4gICAgc2l6ZTogMzVweDtcbiAgICBmb250LWZhbWlseTogJ1BhdHJpY2sgSGFuZCcsIGN1cnNpdmU7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"searchpage\" class=\"container-fluid\">\n  <h2  style=\"text-align: center;\" class=\"heading\">Git Search</h2>\n  <a id=\"link\" routerLink='/homepage' routerLinkActive='active'>Back</a>\n  <div class=\"searchform\">\n    \n\n    \n    <form action=\"\" class=\"search-form\">\n      <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"enter username\" [(ngModel)]=\"username\" \n          name=\"username\">\n          <button class=\"btn-info \" type=\"submit\">Search</button>\n      </div>\n\n\n    </form>\n  </div>\n  <div class=\"col-md-12\">\n      <div *ngIf='profile'>\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" >\n                <p>{{profile.name}}</p>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"row\" >\n                <div class=\"col-md-04\" >\n                    <img class=\"img-circle img-responsive me\" src=\"{{profile.avatar_url}}\" >\n                </div>\n                <div class=\"col-md-04\" >\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\"><strong>Username: </strong>{{profile.login}}</li>\n    \n                        <div class=\"stats\">\n                          <span class=\"btn btn-info\">{{profile.public_repos}} Public Repos</span> \n                          <span class=\"btn btn-info\">{{profile.public_gists}} Public Gists</span> \n                          <span class=\"btn btn-info\">{{profile.followers}} Followers</span> \n                          <span class=\"btn btn-info\">{{profile.following}} Following</span>\n                        </div>\n                      </ul>\n    \n\n                  </div>\n                  <div class=\"col-md-04\" >\n                    <div class=\"card-default\">\n                      <div class=\"card-heading\" >\n                         <p>Repositories</p>\n                      </div>\n                      <div class=\"card-body\" >\n                        <div class=\"row\" >\n                         <div class=\"col-md-12\" >\n                           <div *ngFor=\"let repo of repos\" >\n                              <div class=\"col-md-8\" >\n                                  <p><a href=\"{{repo.html_url}}\" target=\"_blank\">{{repo.name}}</a></p>\n                                  <p>{{repo.description}}</p>\n    \n                               </div>\n                               <div class=\"col-md-04\" >\n                                  \n                                  <span class=\"btn btn-info\">{{repo.forks}} Forks</span>\n                                  <span class=\"btn btn-info\">{{repo.watchers}} Watchers</span>\n    \n                               </div>\n                           </div>\n                           \n\n                         </div>\n                        </div>\n                      </div>\n\n                    </div>\n\n                    </div>\n\n              </div>\n      \n            </div>\n          </div>\n           \n           \n        </div>\n\n  </div>\n  \n</div>  "

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userservice.service */ "./src/app/userservice.service.ts");



var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(userserviceService) {
        this.userserviceService = userserviceService;
        this.repos = [];
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    UserprofileComponent.prototype.getuserprofile = function () {
        var _this = this;
        this.userserviceService.fetchProfileDetails().subscribe(function (profile) {
            _this.profile = profile;
            console.log(profile);
        });
        this.userserviceService.fetchRepos().subscribe(function (repos) {
            _this.repos = repos;
            console.log(repos);
        });
    };
    UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "./src/app/userservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/userservice.service.ts ***!
  \****************************************/
/*! exports provided: UserserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserserviceService", function() { return UserserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserserviceService = /** @class */ (function () {
    function UserserviceService(http) {
        this.http = http;
        this.clientid = '94db5a1f7f6d586b214f';
        this.clientsecret = 'bb2986adb9b8ccd044d394a2b8c8ed656a6403b1';
        this.username = 'sharonmaswai';
    }
    UserserviceService.prototype.fetchProfileDetails = function () {
        return this.http.get('https://api.github.com/users/' + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
    };
    UserserviceService.prototype.fetchRepos = function () {
        return this.http.get('https://api.github.com/users/' + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
    };
    UserserviceService.prototype.updateuserProfile = function (username) {
        this.username = username;
    };
    UserserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserserviceService);
    return UserserviceService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sharon-maswai/Desktop/moringa-school/angularwork/gitsearch/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map