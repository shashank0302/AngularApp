import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sendData(ref){
    let refi=ref.value
    if(refi.username!="admin"){
      alert("wrong username")
    }else if(refi.password!="admin"){
      alert("wrong password")
    }else{
      this.router.navigateByUrl('/admin')
    }
  }
}
