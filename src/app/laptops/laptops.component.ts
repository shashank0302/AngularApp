import { Component, OnInit } from '@angular/core';
import { Product2 } from '../models/product2.model';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent{

  productss:Product2[]=[
    {
    productTitle:"Dell G-3",
    description:"Model: G3 Brand: Dell",
    ram:"8gb",
    processor:"Intel i5-9th gen",
    productImage:"https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/g-series/g3_15_3500_non-touch/dg3500nt_cnb_00055lf110_bk_baseline.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=402&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=402,402"
    },
    {
      productTitle:"Asus Rog",
      description:"Model: G14 Brand: Asus",
      ram:"16gb",
      processor:"AMD Ryxen 9",
      productImage:"https://static.digit.in/default/ad79f0b6ed4d4ebd0481ae9353260fd0690a0670.jpeg?tr=w-1200"
      },
      {
        productTitle:"Alienware",
        description:"Model: M-3 Brand: Alienware",
        ram:"16gb",
        processor:"Intel i9",
        productImage:"https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/alienware_notebooks/alienware_m15_r3/pdp/alienware-m15-r3-laptop-pdp.png?fmt=jpg&wid=570&hei=400"
        },

  ]

}
