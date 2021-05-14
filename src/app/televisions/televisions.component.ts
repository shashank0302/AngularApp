import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent {

  products:Product[]=[
    {
      productTitle:"MicroMax",
      description:"Model: M30 Brand: MicroMax",
      cam:"20mp",
      ram:"4gb",
      processor:"Snapdragon 880",
      productImage:"https://5.imimg.com/data5/KI/SG/MY-19054476/led-television-60-cm-gl24h0b0cf-500x500.png"
      },
      {
        productTitle:"Samsung 32-Inch",
        description:"Model: A5 Brand: Samsung",
        cam:"20mp",
        ram:"4gb",
        processor:"Snapdragon 880",
        productImage:"https://www.collinsdictionary.com/images/full/television_160593200.jpg"
        },
  ]


}
