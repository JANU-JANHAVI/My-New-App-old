import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { appConstant } from '../app.constant';
import { environment } from '../environments/environment';
import { Product } from '../product/product';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: Product | any = '';
  id: number | string = '';
  productForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getProduct((data as any).id);
    });
  }
  get appConstant() {
    return appConstant;
  }
  initializeForm(product: any) {
    this.productForm = this.fb.group({
      title: [product.title, [Validators.required]],
      description: [product.description, Validators.required],
      category: [product.category, Validators.required],
      price: [product.price, Validators.required],
      brand: [product.brand, Validators.required],
      stock: [product.stock, Validators.required],
      rating:[product.rating, Validators.required],
    });
  }

  getProduct(id: number) {
    this.http
      .get(`${environment.apiUrl}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        this.initializeForm(data);
        console.log(data);
      });
  }
  submit() {
    console.log(this.productForm.value);
  }
  }
