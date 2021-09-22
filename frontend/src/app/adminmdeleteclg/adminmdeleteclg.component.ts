import { Component, OnInit } from '@angular/core';
import { clgdeletemodel } from "./clgdeletemodel";
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmdeleteclg',
  templateUrl: './adminmdeleteclg.component.html',
  styleUrls: ['./adminmdeleteclg.component.css']
})
export class AdminmdeleteclgComponent implements OnInit {

  constructor(public data:DataService,public router:Router) { }

  model:clgdeletemodel[]=[];
  // _id:any;

  ngOnInit(): void {
    this.data.clgdata()
    .subscribe((res:any)=>{
      this.model=JSON.parse(JSON.stringify(res));
      console.log(this.model); 
    }) 
  }
  deleteclg(_id:any,name:any){
    console.log(_id);
    this.data.deleteclg(_id,name);
    this.router.navigate(['adminhome']);
    
  }

}
