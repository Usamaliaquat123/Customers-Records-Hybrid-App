import { NewCustomerPage } from './../new-customer/new-customer';
import { CustomerDetailPage } from './../customer-detail/customer-detail';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { Component, Pipe } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomerFilterPipe } from "../../pipes/customer-filter/customer-filter";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  data : any;
  constructor(public navCtrl: NavController,public RestApiProvider : RestApiProvider) {
   
  } 

  ionViewWillEnter() {
    this.RestApiProvider.getCustomers().subscribe(data => {
      this.data = data;
      console.log(data)
  })
  }

  addCustomer(){
    this.navCtrl.push(NewCustomerPage);
  }
  ItemDetail($event,c){
    this.navCtrl.push(CustomerDetailPage,c);
  }
 
  

  
}
