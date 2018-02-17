import { NewCustomerPage } from './../pages/new-customer/new-customer';
import { CustomerDetailPage } from './../pages/customer-detail/customer-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule,Http } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { CustomerFilterPipe } from "../pipes/customer-filter/customer-filter";

@NgModule({
  declarations: [
    MyApp,
    CustomerFilterPipe,
    HomePage,
    CustomerDetailPage,
    NewCustomerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomerDetailPage,
    NewCustomerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider,
    
  ]
})
export class AppModule {}
