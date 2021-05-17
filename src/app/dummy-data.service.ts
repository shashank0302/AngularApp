import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor(private hc1:HttpClient,private hc2:HttpClient) { }

  getFakeData1():Observable<any>{
    return this.hc1.get<any>('https://reqres.in/api/unknown')
  }

  getFakeData2():Observable<any[]>{
    return this.hc2.get<any[]>('https://jsonplaceholder.typicode.com/users')
  }
}
