import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private product: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.product.getproducts().subscribe((data: any[]) => {
      this.products = (data as any).products;
      console.log(this.products);
      console.log(data);
    });
  }
  getProductDetails( product: any): void {
    console.log('clicked');
    this.router.navigate(['details', product.id]);
  }
}
