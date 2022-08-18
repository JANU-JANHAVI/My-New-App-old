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
    private formBuilder: FormBuilder

  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getDetails((data as any).id);
    });
    this.initialize();

  }
  initialize() {
    this.initializeForm();
  }

  initializeForm() {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['',Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSubmit(){

  }

  getDetails(id: number) {
    this.http
      .get(`${environment.apiUrl}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        console.log(data);
      });
  }
}
