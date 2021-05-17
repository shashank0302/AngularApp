import { Component, OnDestroy, OnInit } from '@angular/core';
import { DummyDataService } from '../dummy-data.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit,OnDestroy {
  fakeData1:any
  fakeData2:any
  

  constructor(private fd1obj:DummyDataService,private fd2obj:DummyDataService) { }

  ngOnInit(){
    this.fd1obj.getFakeData1().subscribe(
      fk=>{
        this.fakeData1=fk
        console.log(this.fakeData1)
      },
      err=>{
        console.log("error message is",err)
      }
    )

    this.fd2obj.getFakeData2().subscribe(

      fk=>{
        this.fakeData2=fk
      },
      err=>{
        console.log("error is ",err)
      }
    )
    

  }

  ngOnDestroy(){
    this.fakeData1.unsubscribe()
    this.fakeData2.unsubscribe()
  }

}
