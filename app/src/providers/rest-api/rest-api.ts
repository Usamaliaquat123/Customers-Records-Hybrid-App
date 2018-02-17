
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestApiProvider {
  constructor(public http: Http) {
    console.log('Hello RestApiProvider Provider');
  }

  getCustomers() {
    return this.http.get('https://clientap.herokuapp.com/api/customers')
      .map(data => data.json());
  }

  postCustomers(customer){
    return this.http.post('https://clientap.herokuapp.com/api/customers',customer);
  }
}
