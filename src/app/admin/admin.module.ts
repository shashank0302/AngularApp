import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CRUDproductComponent } from './crudproduct/crudproduct.component';


@NgModule({
  declarations: [
    AdminComponent,
    ViewProductsComponent,
    CRUDproductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
