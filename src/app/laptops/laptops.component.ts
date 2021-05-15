import { Component, OnInit } from '@angular/core';
import { DataLaptopService } from '../data-laptop.service';
import { Product2 } from '../models/product2.model';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit{

    productss:Product2[]=[]
    constructor(private dsObj:DataLaptopService){}
  ngOnInit(){
    this.productss=this.dsObj.getData()
  }
}
