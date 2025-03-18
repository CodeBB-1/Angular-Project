import { Injectable } from '@angular/core';
import { InterfaceProducts } from './productsInterface';

@Injectable({
  providedIn: 'root'
})
export class OrderCartService {

  orderPerfume: InterfaceProducts[]  = [];

  constructor() { }

  getPerfume() {
    return this.orderPerfume
  }

  OrderButton (object:InterfaceProducts){
    const existingPerfume =  this.orderPerfume.find((value)  => {return value === object});

    if (!existingPerfume) {
      this.orderPerfume.push(object)
    }

    console.log(this.orderPerfume);
    
  }

  getTotal () {
    let total = 0;
    this.orderPerfume.forEach(element =>{
      total += element.price
    })

    return total;
  }

  getTotalWithDiscount() {
    const total = this.getTotal();
    if (total > 40) {
      return total * 0.85; // 15% discount
    } else {
      return total;
    }
  }
}


