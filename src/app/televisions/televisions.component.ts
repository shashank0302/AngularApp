import { Component, OnInit } from '@angular/core';
import { DataTelevisionService } from '../data-television.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

    televisions:Product[]=[]
    constructor(private dsObj:DataTelevisionService){}

    ngOnInit(){
      this.dsObj.getTvData().subscribe(
        tvData=>{
          this.televisions=tvData;
        },
        err=>{
          console.log("err is",err)
        }
      )
    }


}
