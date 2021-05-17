import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/users.model';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  user:Users
  constructor(private data:ActivatedRoute,private userDetails:UserDataService) { }

  ngOnInit(){
    let id=this.data.snapshot.params.id

    this.userDetails.getUserDataById(id).subscribe(
      data=>{
      this.user=data
      },
      err=>{
        console.log("error is ",err)
      }
    )
  }


}
