import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'customerFilter',
})
export class CustomerFilterPipe implements PipeTransform {
 
  transform(data: any , customer : any) {
    // check if search term is undefined
    if(customer === undefined) return data;
    // Othervise updated a customer array
    return data.filter(function(data){
      return data.FirstName.toLowerCase().includes(customer.toLowerCase())
    })
  }
}
