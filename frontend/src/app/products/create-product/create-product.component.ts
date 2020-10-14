import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  @ViewChild('productForm', {static: false}) public createProductForm : NgForm;

  public productForm: FormGroup;
  productId = null;
  categoriesList: any = [];
  files: any[];
  url: any;
  /*onSelectFile(event) { // called each time file input changes
    console.log('event.target.files[0]', event.target.files[0])
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url
        console.log('Reader ', reader)
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target.result;
          console.log('evt Result ',event.target.result )
        }
      }
  }



  onUpload() {
    const formData = new FormData();
    for (const file of this.files) {
        formData.append(name, file, file.name);
    }
  }*/

  onCategoriesChange(evt: any) {
    this.productForm.patchValue({ Category: evt });
  }

  onProductSubmit(productForm) {
    if (this.productId != null) {
      this.productService.updateProduct(this.productId, productForm.value)
        .subscribe(
          (res) => {
            this.productForm.reset();
            this.router.navigate(['/product-listing']);
          },
          (err) => {
            console.log('Error ', err)
          }
        );
    } else {
      this.productService.saveProduct(productForm.value)
        .subscribe(
          (res) => {
            this.productForm.reset();
            this.router.navigate(['/product-listing'])
          },
          (err) => {
            console.log('Error ', err)
          }
        );
    }
  }

  setFormById() {
    this.productService.getProductById(this.productId)
      .subscribe(
        (res) => {
          console.log('Res => ', res);
          this.productForm.patchValue(res)
        },
        (err) => {
          console.log('Error => ', err)
        }
      );
  }

  setCategories() {
    this.productService.loadCat()
      .subscribe(
        (res) => { console.log('Categories ', this.categoriesList = res) },
        (err) => { console.log('Categories Err ', err) }
      );
  }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.productForm = this.productService.createProductFormGroup();
    this.setCategories();
    if (this.productId != null) {
      this.setFormById();
    }
  }

}
