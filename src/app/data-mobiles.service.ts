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
      return this.ho.get<Product[]>("http://localhost:3000/mobiles")
    }


    createNewMobile(ps):Observable<any>{
      return this.ho.post("http://localhost:3000/mobiles",ps)
    }

    updateMobile(modObj):Observable<any>{
      return this.ho.put("http://localhost:3000/mobiles/"+modObj.id,modObj)
    }

    deleteMobileobj(mob):Observable<any>{
      return this.ho.delete("http://localhost:3000/mobiles/"+mob.id)
    }
  }
