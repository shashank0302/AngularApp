import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataTelevisionService {

  constructor() { }

  private products:Product[]=[
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

  getData():Product[]{
    return this.products
  }
}
