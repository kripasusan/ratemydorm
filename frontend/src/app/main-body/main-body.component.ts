import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { clgmodel } from "./clgmodel";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  model:clgmodel[]=[];
  constructor(public data : DataService , public router:Router) { }

  ngOnInit(): void {
    this.data.clgdata()
    .subscribe((res:any)=>{
      this.model=JSON.parse(JSON.stringify(res));
      console.log(this.model); 
    }) 
  }

  clg(_id:any){
    console.log(_id);
    this.router.navigate(['/clg'],{state:{"data":_id}});
  }

}
