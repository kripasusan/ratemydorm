import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    username:"",
    userpassword:""
  }
  re:Boolean=false;
  constructor( public data : DataService,public router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.user);
    this.data.login(this.user)
    .subscribe(res=>{ 
      console.log(res.send);
      localStorage.setItem('token',res.token);
      this.router.navigate(['/']);
    }
    // error=>{console.log("dd");}
    );
  }
}
