import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users.model';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:Users[]
  constructor(private usobj:UserDataService,private routerData:Router) { }

  ngOnInit(){

    this.usobj.getUserData().subscribe(
      userdata=>{
        this.users=userdata
      },
      error=>{
        console.log("error occured",error)
      }
    )
  }

  onSelectId(id){
    this.routerData.navigateByUrl('usersDetails/'+id)
  }

  // ngOnDestroy(){
  //   this.users.unsubscribe();
  // }
}
