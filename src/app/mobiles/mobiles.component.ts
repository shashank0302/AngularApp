import { Component, OnInit } from '@angular/core';
import { DataMobilesService } from '../data-mobiles.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  products:Product[]=[];

  constructor(private dataObj:DataMobilesService ){}

  ngOnInit(){
    this.products=this.dataObj.getData();
  }
  

}
