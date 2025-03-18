import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:  '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:  'about',
    component: AboutUsComponent
  },
  {
    path: "products",
    component: ProductsComponent

  },
  {
    path: "order",
    component: OrderComponent
  },
  {
    path: "details/:getTheRightOne",
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch:  'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
