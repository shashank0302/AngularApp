import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataTelevisionService {

  constructor(private hc:HttpClient) { }

  getTvData():Observable<Product[]>{
    return this.hc.get<Product[]>('http://localhost:3000/television')
  }

}
