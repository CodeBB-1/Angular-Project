import { Component } from '@angular/core';
import { InterfaceProducts } from '../productsInterface';
import { perfume } from '../productsObject';
import { OrderCartService } from '../order-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
ImportdedPerfume: InterfaceProducts[] = perfume;

constructor(private orderCartService: OrderCartService){ }

addToCart(product: InterfaceProducts){
  this.orderCartService.OrderButton(product);
}

}
