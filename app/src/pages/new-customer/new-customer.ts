import { HomePage } from './../home/home';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { customer } from './../../models/customer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

@Component({
  selector: 'page-new-customer',
  templateUrl: 'new-customer.html',
})
export class NewCustomerPage {
  customer = {} as customer;
  constructor(public toastCtrl :ToastController,public navCtrl: NavController, public navParams: NavParams, public RestApiProvider: RestApiProvider) {
  }

  ionViewDidLoad() {
    
  }


  addCustomer(customer){
    this.RestApiProvider.postCustomers(customer).subscribe(res => {
     if(res){
      this.navCtrl.setRoot(HomePage);
      this.toastCtrl.create({
        message: 'Customer was added successfully',
        duration: 3000,
        position: 'top'
      }).present();
      
     } else{
        this.toastCtrl.create({
          message: 'Error make sure you are connected to internet.',
          duration: 3000,
          position: 'top'
        }).present();
      }
    })
  }


  cancelpop(){
    this.navCtrl.pop();
  }
}
