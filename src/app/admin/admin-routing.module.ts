import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CRUDproductComponent } from './crudproduct/crudproduct.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [{ path: '', component: AdminComponent,children:[{path:'viewproducts',component:ViewProductsComponent},{path:'CRUDproduct',component:CRUDproductComponent},{path:'',redirectTo:'/admin/viewproducts',pathMatch:'full'}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
