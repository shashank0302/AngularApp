import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, observable} from 'rxjs'
import { Users } from './models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private hc:HttpClient) { }

  getUserData():Observable<Users[]>{
      return this.hc.get<Users[]>('http://localhost:3000/users')
  }

  getUserDataById(id):Observable<Users>{
    return this.hc.get<Users>('http://localhost:3000/users/'+id)
  }

}
