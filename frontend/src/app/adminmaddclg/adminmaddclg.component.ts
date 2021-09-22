import { Component, OnInit } from '@angular/core';
import { clgmodel } from "../main-body/clgmodel";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-adminmaddclg',
  templateUrl: './adminmaddclg.component.html',
  styleUrls: ['./adminmaddclg.component.css']
})
export class AdminmaddclgComponent implements OnInit {

  constructor(public data:DataService,public router:Router) { }

  model=new clgmodel("","","");

  ngOnInit(): void {
  }
  add(){
    console.log(this.model);
    this.data.adminaddclg(this.model);
    this.router.navigate(['adminhome'])
  }

}
