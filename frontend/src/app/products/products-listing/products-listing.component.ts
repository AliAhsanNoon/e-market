import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.css']
})
export class ProductsListingComponent implements OnInit {

  productList: any;

  constructor(private productService: ProductService, private router: Router) { }

  getProductsList() {
    this.productService.getProductList()
      .subscribe(
        (res) => {
          console.log('ResList ', res);
          this.productList = res;
        },
        (err) => {
          console.log('Error', err)
        }
      );
  }

  editRecord(id) {
    this.router.navigate(['/product/', id])
  }

  ngOnInit() {
    this.getProductsList();
  }

}
