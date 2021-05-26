import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataMobilesService } from 'src/app/data-mobiles.service';
import { Mobile } from '../models/mobile.model';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-crudproduct',
  templateUrl: './crudproduct.component.html',
  styleUrls: ['./crudproduct.component.css']
})
export class CRUDproductComponent implements OnInit {

  constructor(private dsObj:DataMobilesService,private router:Router) { }

  ngOnInit(): void {
  }

  mobileModel=new Mobile('','','','','','');

  onSubmitNewMobile(){

      this.dsObj.createNewMobile(this.mobileModel).subscribe(
        res=>{
          //navigate to viewmobiles component
          this.router.navigateByUrl("admin/viewproducts")

        },
        err=>{
          console.log('err in creating new mobile',err)
        }
      )
  }
}
