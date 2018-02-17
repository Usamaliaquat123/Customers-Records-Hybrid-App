webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_api_rest_api__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCustomerPage = (function () {
    function NewCustomerPage(navCtrl, navParams, RestApiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.RestApiProvider = RestApiProvider;
        this.customer = {};
    }
    NewCustomerPage.prototype.ionViewDidLoad = function () {
    };
    NewCustomerPage.prototype.addCustomer = function (customer) {
        this.RestApiProvider.postCustomers(customer).subscribe(function (res) {
            console.log(res);
        });
    };
    NewCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-new-customer',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Mean App\api_auth\client-task\app\src\pages\new-customer\new-customer.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add a Customer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-list>\n    <ion-item>\n        <ion-label color="primary" floating>Customer Name</ion-label>\n        <ion-input [(ngModel)]=\'customer.FirstName\'></ion-input>\n    </ion-item>  \n    <ion-item>\n        <ion-label color="primary" floating>Date Of Birth</ion-label>\n        <ion-input [(ngModel)]=\'customer.DOB\'></ion-input>\n    </ion-item> \n    <ion-item>\n        <ion-label color="primary" floating>Gender</ion-label>\n        <ion-input [(ngModel)]=\'customer.Gender\'></ion-input>\n    </ion-item> \n    <ion-item>\n        <ion-label color="primary" floating>Address</ion-label>\n        <ion-input [(ngModel)]=\'customer.Address\'></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary" floating>Email</ion-label>\n        <ion-input [(ngModel)]=\'customer.Email\'></ion-input>\n    </ion-item>  \n    <ion-item>\n        <ion-label color="primary" floating>City</ion-label>\n        <ion-input [(ngModel)]=\'customer.City\'></ion-input>\n    </ion-item> \n</ion-list>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button color="secondary" full (click)="addCustomer(customer)">Add</button>\n      </ion-col>\n      <ion-col>\n          <button ion-button color="danger" full (click)="cancelpop()">Cancel</button>    \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Mean App\api_auth\client-task\app\src\pages\new-customer\new-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
    ], NewCustomerPage);
    return NewCustomerPage;
}());

//# sourceMappingURL=new-customer.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerDetailPage = (function () {
    function CustomerDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = this.navParams.data;
    }
    CustomerDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerDetailPage');
    };
    CustomerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer-detail',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Mean App\api_auth\client-task\app\src\pages\customer-detail\customer-detail.html"*/'\n<ion-header>\n\n  <ion-navbar color= "dark">\n    <ion-title>{{customer.FirstName}} Customer Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full color="secondary" (click)="addCustomer()">Add Customer</button>\n    <ion-card>\n      <ion-card-header>\n          <h2>Name : {{ customer.FirstName }}</h2>\n      </ion-card-header>\n      <ion-card-content>\n          <h3>Email : {{ customer.Email }} </h3>\n          <p>Gender : {{ customer.Gender }}</p>\n          <p>Address : {{ customer.Address }}</p>\n          <p>Date Of Birth: {{ customer.DOB }} </p>\n          <p>City : {{ customer.City }}</p>\n      </ion-card-content>\n    </ion-card>\n           \n        \n       \n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Mean App\api_auth\client-task\app\src\pages\customer-detail\customer-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], CustomerDetailPage);
    return CustomerDetailPage;
}());

//# sourceMappingURL=customer-detail.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_customer_new_customer__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_detail_customer_detail__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, RestApiProvider) {
        this.navCtrl = navCtrl;
        this.RestApiProvider = RestApiProvider;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.RestApiProvider.getCountries().subscribe(function (data) {
            _this.data = data;
            console.log(data);
        });
    };
    HomePage.prototype.addCustomer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__new_customer_new_customer__["a" /* NewCustomerPage */]);
    };
    HomePage.prototype.ItemDetail = function ($event, c) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__customer_detail_customer_detail__["a" /* CustomerDetailPage */], c);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Mean App\api_auth\client-task\app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color= "dark">\n    <ion-title>\n      Customer List App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-searchbar\n    [(ngModel)]="country">\n  </ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let c of data | customerFilter:country" (click)="ItemDetail($event,c)">\n      <h1>{{c.FirstName}}</h1>\n      <h2>Address: {{c.Address}}, City: {{c.City}}</h2>\n      <p>Email : {{ c.Email }} </p>\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom #fab4>\n      <button ion-fab (click)="addCustomer()"><ion-icon name="ios-add-outline"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Mean App\api_auth\client-task\app\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_new_customer_new_customer__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_customer_detail_customer_detail__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_rest_api_rest_api__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_customer_filter_customer_filter__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_customer_filter_customer_filter__["a" /* CustomerFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_customer_detail_customer_detail__["a" /* CustomerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_new_customer_new_customer__["a" /* NewCustomerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_customer_detail_customer_detail__["a" /* CustomerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_new_customer_new_customer__["a" /* NewCustomerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_rest_api_rest_api__["a" /* RestApiProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Mean App\api_auth\client-task\app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Mean App\api_auth\client-task\app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomerFilterPipe = (function () {
    function CustomerFilterPipe() {
    }
    CustomerFilterPipe.prototype.transform = function (data, customer) {
        // check if search term is undefined
        if (customer === undefined)
            return data;
        // Othervise updated a customer array
        return data.filter(function (data) {
            return data.FirstName.toLowerCase().includes(customer.toLowerCase());
        });
    };
    CustomerFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'customerFilter',
        })
    ], CustomerFilterPipe);
    return CustomerFilterPipe;
}());

//# sourceMappingURL=customer-filter.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestApiProvider = (function () {
    function RestApiProvider(http) {
        this.http = http;
        console.log('Hello RestApiProvider Provider');
    }
    RestApiProvider.prototype.getCountries = function () {
        return this.http.get('https://clientap.herokuapp.com/api/customers')
            .map(function (data) { return data.json(); });
    };
    RestApiProvider.prototype.postCustomers = function (customer) {
        return this.http.post('https://clientap.herokuapp.com/api/customers', customer);
    };
    RestApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], RestApiProvider);
    return RestApiProvider;
}());

// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// /*
//   Generated class for the DigitEmpApiProvider provider.
//   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
//   for more info on providers and Angular DI.
// */
// @Injectable()
// export class DigitEmpApiProvider {
//   constructor(,public http: Http) {
//     console.log('Hello DigitEmpApiProvider Provider');
//   }
//   index(id){
//   }
//   category(page){
//    return this.http.get("https://www.digitemb.com/wp-json/wp/v2/posts?_embed&categories=221&filter[order]=DESC&filter[posts_per_page]=5&page="+ page)
//         .map(data => data.json());  
//   }
//   categorieVector(page){
//     return this.http.get("https://www.digitemb.com/wp-json/wp/v2/posts?_embed&categories=222&filter[order]=DESC&filter[posts_per_page]=5&page="+ page)
//     .map(data => data.json());  
//   }
//   facebookApi(token){
//     return this.http.get("https://graph.facebook.com/v2.10/me?fields=id%2Cname%2Cemail%2Cfirst_name%2Cpicture.width(720).height(720).as(picture_large)%2Ccover&access_token="+ token)
//     .map(data => data.json());
//   }
//     search(keyword,id){
//        return this.http.get("https://www.digitemb.com/wp-json/wp/v2/posts?_embed&filter[order]=DESC&filter[posts_per_page]=5&search=" + keyword + "&page="+id)
//                     .map(data => data.json());
//       }
// } 
//# sourceMappingURL=rest-api.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map