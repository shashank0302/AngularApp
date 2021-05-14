import { Component, Input, OnInit } from '@angular/core';
import { Product2} from '../models/product2.model';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.css']
})
export class ProductTwoComponent{

  @Input() obj:Product2

}
