import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(public router:Router,public data:DataService) { }

  user={username:"",userpassword:""};
  ngOnInit(): void {
  }
  login(){
    this.data.adminlogin(this.user);
    // this.router.navigate(['adminhome']);
  }

}
