import { Injectable } from '@angular/core';
import { Product2 } from './models/product2.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataLaptopService {

  constructor(private hc:HttpClient) { }

  getLaptopData():Observable<Product2[]>{
    return this.hc.get<Product2[]>('assets/laptopsData.json')
  }
}
