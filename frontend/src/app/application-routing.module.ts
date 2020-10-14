import { CreateProductCanDeactivateService } from './services/create-product-can-deactivate.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ProductsListingComponent } from './products/products-listing/products-listing.component';
import { UserComponent } from './users/user/user.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: '/product-listing', pathMatch: 'full'
  },
  {
    path: 'register', component: UserRegisterComponent
  },
  {
    path: 'login', component: UserComponent
  },
  {
    path: 'product-listing', component: ProductsListingComponent
  },
  {
    path: 'create-product', component: CreateProductComponent,
    canDeactivate: [CreateProductCanDeactivateService],
    canActivate: [AuthGuardService]
  },
  {
    path: 'product/:productId', component: CreateProductComponent
  }
];


@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }


