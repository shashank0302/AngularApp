import { Component, OnInit } from '@angular/core';
import { DataMobilesService } from 'src/app/data-mobiles.service';
import { Product } from 'src/app/models/product.model';
import { Mobile } from '../models/mobile.model';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  mobiles:Product[]=[]
  editMobileind;
  editmobileobj=new Mobile('','','','','','');
  editStatus:boolean=false
  
  constructor(private dsobj:DataMobilesService,private router:Router) { }

  ngOnInit(){
    this.dsobj.getData().subscribe(
      result=>{
        this.mobiles=result
      },
      err=>{
        console.log("error occured")
      }
    )

  }

  editMobile(mobileobj,ind){
    this.editMobileind=ind
    this.editmobileobj=mobileobj
    this.editStatus=true;

  }

  saveMobile(modifiedobj){
    this.editStatus=false
    
    modifiedobj.id=this.editmobileobj["id"];
    modifiedobj.productImage=this.editmobileobj["productImage"];
    this.dsobj.updateMobile(modifiedobj).subscribe(
      res=>{},
      err=>
      console.log("err is ",err)
    )
    console.log(modifiedobj)
  }

  deleteMobile(delobj){
    console.log(delobj)
    this.dsobj.deleteMobileobj(delobj).subscribe(
      res=>{
      let currentUrl = this.router.navigateByUrl("admin/viewproducts");
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
        
      },
      err=>{
        console.log("err in delete",err)
      }
    )
  }

}
