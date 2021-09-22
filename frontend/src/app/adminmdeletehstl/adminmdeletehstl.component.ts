import { Component, OnInit } from '@angular/core';
import { deletehstl } from "./deletehstl";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-adminmdeletehstl',
  templateUrl: './adminmdeletehstl.component.html',
  styleUrls: ['./adminmdeletehstl.component.css']
})
export class AdminmdeletehstlComponent implements OnInit {

  constructor(public data:DataService,public router:Router) { }

  model:deletehstl[]=[];

  ngOnInit(): void {
    this.data.hstlsdata()
    .subscribe((res:any)=>{
      this.model=JSON.parse(JSON.stringify(res));
      console.log(this.model); 
    }) 
  }
  deletehstl(_id:any,name:any){
    console.log(_id);
    this.data.deletehstl(_id,name);
    this.router.navigate(['adminhome'])
  }

}
