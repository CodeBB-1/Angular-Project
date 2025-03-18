import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InterfaceProducts } from '../productsInterface';
import { perfume } from '../productsObject';
import { OrderCartService } from '../order-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  detailsPerfume: InterfaceProducts;

  constructor(private activatedRoute: ActivatedRoute, private orderCartService: OrderCartService) {
    let id = (+activatedRoute.snapshot.params["getTheRightOne"]);
    this.detailsPerfume = perfume[id]
    // console.log(this.detailsPerfume);
    
  }
  addItToOrder () {
    this.orderCartService.OrderButton(this.detailsPerfume)
    
  }

}
