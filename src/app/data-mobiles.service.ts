import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataMobilesService {

  constructor() { }

  private products:Product[]=[

    {
    productTitle:"Samsung A-50",
    description:"Model: A50 Brand: Samsung",
    cam:"20mp",
    ram:"4gb",
    processor:"Snapdragon 880",
    productImage:"https://images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-6gb-sm-m515fzkdins-sm-m---fzkeins-304622882?$684_547_PNG$"
    },
    {
    productTitle:"Galaxy-S9",
    description:"Model: S9 Brand: Samsung",
    cam:"25mp",
    ram:"4gb",
    processor:"Snapdragon 880",
    productImage:"https://www.searchpng.com/wp-content/uploads/2019/05/samsung-galaxy-s10-png-image.jpg"
    },
    
    {
    productTitle:"IPhone 12 Pro",
    description:"Model: 12pro Brand: Iphone",
    cam:"50mp",
    ram:"12gb",
    processor:"Apple A13",
    productImage:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-red-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343703000"
    },
    
    {
    productTitle:"One-plus 8 Pro",
    description:"Model: 8Pro Brand: Oneplus",
    cam:"40mp",
    ram:"8gb",
    processor:"Snapdragon 850",
    productImage:"https://image01.oneplus.net/shop/202009/16/1-M00-19-CB-rB8LB19hd1GAbRaNAANs4AY88Fk626.png"
    },
    
    {
    productTitle:"Redmi Note Plus",
    description:"Model: Note-Plus Brand: Redmi",
    cam:"23mp",
    ram:"3gb",
    processor:"Snapdragon 870",
    productImage:"https://i01.appmifile.com/webfile/globalimg/in/cms/FE1C9BBB-AC9A-EB3D-713C-F1718FAB3FC9.jpg"
    },
    
    {
    productTitle:"Google Pixel",
    description:"Model: Pixel-3 Brand: Google",
    cam:"20mp",
    ram:"8gb",
    processor:"Snapdragon 900",
    productImage:"https://www.gizmochina.com/wp-content/uploads/2019/09/google-pixel-500x500.jpg"
    },
    
    ];

    getData():Product[]{
      return this.products
    }

  }
