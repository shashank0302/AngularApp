import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataMobilesService {

  constructor(private ho:HttpClient) { }


    getData():Observable<Product[]>{
      return this.ho.get<Product[]>("assets/data.json")
    }

  }
