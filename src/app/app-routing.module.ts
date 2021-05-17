import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { DummyComponent } from './dummy/dummy.component';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsTempComponent } from './products-temp/products-temp.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductsTempComponent, children:[{path:'mobiles',component:MobilesComponent},{path:'laptops',component:LaptopsComponent},{path:'televisions',component:TelevisionsComponent},{path:'dummy',component:DummyComponent},{path:'',redirectTo:'/products/mobiles',pathMatch:'full'}]},
  {path:'contactus',component:ContactusComponent},
  {path:'users',component:UsersComponent},
  {path:'usersDetails/:id',component:UsersDetailsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
