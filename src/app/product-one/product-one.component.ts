import { Component, Input, EventEmitter, Output } from '@angular/core';


import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css']
})
export class ProductOneComponent{
  //recieving data
  @Input() obj:Product


}
