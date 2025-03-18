import { Component } from '@angular/core';
import { InterfaceProducts } from '../productsInterface';
import { OrderCartService } from '../order-cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  perfumeItems: InterfaceProducts[];
  total: number;
  totalWithSurcharge: number;
  totalWithDiscount: number;

  constructor(private orderCartService: OrderCartService ) {
    this.perfumeItems = orderCartService.getPerfume()
    console.log(this.perfumeItems);
    this.total = orderCartService.getTotal();
    this.totalWithSurcharge = this.total * 0.1;
    this.totalWithDiscount = this.orderCartService.getTotalWithDiscount();
  }
}
