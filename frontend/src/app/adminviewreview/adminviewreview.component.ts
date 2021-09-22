import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { deletereviewmodel } from "./deletereview";

@Component({
  selector: 'app-adminviewreview',
  templateUrl: './adminviewreview.component.html',
  styleUrls: ['./adminviewreview.component.css']
})
export class AdminviewreviewComponent implements OnInit {

  constructor(public data:DataService,public router:Router) { }

  model:deletereviewmodel[]=[];

  ngOnInit(): void {
    this.data.reivewdata()
    .subscribe((res:any)=>{
      this.model=JSON.parse(JSON.stringify(res));
      console.log(this.model); 
    })
  }
  delete(_id:any){
    this.data.deletereview(_id);
    this.router.navigate(['/adminhome'])
  }

}
