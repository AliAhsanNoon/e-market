import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { ApiClientService } from './api-client.service';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fb: FormBuilder, private api: ApiClientService, private catService : CategoryService) {
    this.createProductFormGroup();
  }

  createProductFormGroup(){
    return this.fb.group({
      ProductName : new FormControl(null , Validators.required),
      ProductPrice : new FormControl(null , Validators.required),
      Category: new FormControl()
    });
  }

  saveProduct(productData:any){
    return this.api.post(`product`,productData);
  }

  updateProduct(productId: any, productData:any){
    return this.api.put(`product/${productId}`, productData);
  }

  getProductList(){
    return this.api.get(`product`);
  }

  getProductById(id){
    return this.api.get('product/' + id);
  }

  loadCat(){
    return this.catService.loadCategories();
  }

}
