import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, ProductComponent, DetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
