import { AuthGuardService } from './services/auth-guard.service';
import { JwtHelperService } from './helper/jwt-helper.service';
import { CreateProductCanDeactivateService } from './services/create-product-can-deactivate.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListingComponent } from './products/products-listing/products-listing.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ProductService } from './services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiClientService } from './services/api-client.service';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationRoutingModule } from './application-routing.module';
import { UserComponent } from './users/user/user.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UserService } from './services/user.service';
import { StorageHelper } from './helper/storage.helper';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListingComponent,
    CreateProductComponent,
    UserComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ApplicationRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    JwtHelperService,
    StorageHelper,
    ProductService,
    ApiClientService,
    UserService,
    CreateProductCanDeactivateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
