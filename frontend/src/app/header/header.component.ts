import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public data:DataService,public router:Router) { }
  clgpic:any;
  clgname:any;

  ngOnInit(): void {
    this.clgpic=localStorage.getItem("clgpic");
    this.clgname=localStorage.getItem("clgname");
  }
  logout(){
    localStorage.removeItem("token");
    // @ts-ignore: Object is possibly 'null'
    document.getElementById("three").scrollIntoView();
  }
  scroll() {
   // @ts-ignore: Object is possibly 'null'
    document.getElementById("three").scrollIntoView();
}
  addclg(){
    this.router.navigate(['/addclg']);
  }

}
