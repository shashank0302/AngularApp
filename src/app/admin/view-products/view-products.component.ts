import { Component, OnInit } from '@angular/core';
import { DataMobilesService } from 'src/app/data-mobiles.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  mobiles:Product[]=[]
  constructor(private dsobj:DataMobilesService) { }

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

}
