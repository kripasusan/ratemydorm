import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { signupmodel } from "./signupmodel";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model=new signupmodel("","","");
  checkpass:Boolean=false;
  repass="";
  re:Boolean=false;

  constructor(public data:DataService , public router:Router) { }

  ngOnInit(): void {
  }
  signup(){
    console.log(this.model);
    this.data.signup(this.model);
    this.router.navigate(['login']);
  }
  check(){
    if(this.repass==this.model.password)
    {
      this.checkpass=true;
    }
    else
    {
      this.checkpass=false;
    }
  }
}
