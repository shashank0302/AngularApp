import { Component, OnInit } from '@angular/core';
import { DataTelevisionService } from '../data-television.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {
    products:Product[]=[]
    constructor(private dsObj:DataTelevisionService){}

    ngOnInit(){
      this.products=this.dsObj.getData()
    }



}
