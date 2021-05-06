import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductOneComponent } from './product-one/product-one.component';
import { ProductTwoComponent } from './product-two/product-two.component';
import { ProductThreeComponent } from './product-three/product-three.component';
import { ProductFourComponent } from './product-four/product-four.component';
import { ProductFiveComponent } from './product-five/product-five.component';
import { ProductSixComponent } from './product-six/product-six.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductOneComponent,
    ProductTwoComponent,
    ProductThreeComponent,
    ProductFourComponent,
    ProductFiveComponent,
    ProductSixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
