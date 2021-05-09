import { Component} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products-temp',
  templateUrl: './products-temp.component.html',
  styleUrls: ['./products-temp.component.css']
})
export class ProductsTempComponent{
  products:Product[]=[

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
    productImage:"https://lh3.googleusercontent.com/proxy/Tk8_C44Qm97Q-LySbzOfXksS5xFacQDZw7MLoyJJJq0E66pXiSztUnUET3xPK3x7xnr6JFDFovjlg3lBR_Yv8Y7qTmsOXoZWoJdDc2fDR7UAUGlVxvZ2"
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
    }
    ];


    recievedDetails=[]
    count=0
    getRecivedDetails(title){
      
      this.recievedDetails.push(title)
      this.count+=1  
    }

}


