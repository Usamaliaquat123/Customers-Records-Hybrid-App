import { NewCustomerPage } from './../new-customer/new-customer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-customer-detail',
  templateUrl: 'customer-detail.html',
})
export class CustomerDetailPage {
  customer : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customer = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerDetailPage');
  }

  addCustomer(){
    this.navCtrl.push(NewCustomerPage);
  }
}
