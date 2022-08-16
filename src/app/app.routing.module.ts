import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {DetailsComponent} from './details/details.component'
const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'product/:id', 
    component: ProductComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
