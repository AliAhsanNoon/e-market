import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateProductComponent } from '../products/create-product/create-product.component';

@Injectable()
export class CreateProductCanDeactivateService implements CanDeactivate<CreateProductComponent>{
  canDeactivate(component: CreateProductComponent): boolean {
    if (component.productForm.dirty) {
      return confirm('Are you sure you want to discard your changes ?');
    }
    return true;
  }

}
