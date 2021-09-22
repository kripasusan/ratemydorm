import { Component, OnInit } from '@angular/core';
import { reviewmodel } from "../clg/reviewmodel";
import { hstlmodel } from "../clg/hstlmodel";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addhstl',
  templateUrl: './addhstl.component.html',
  styleUrls: ['./addhstl.component.css']
})
export class AddhstlComponent implements OnInit {

  constructor(public data:DataService,public router:Router) { }
  i:any;
  model=new hstlmodel("","","");
  new=new reviewmodel("","","","","","");
  ngOnInit(): void {
    this.i=history.state.data;
    console.log(this.i);
  }
  add(){
    this.model.nameofclg=this.i.name;
    this.new.nameofclg=this.i.name;
    this.new.nameofhstl=this.model.nameofhstl;
    this.model.gen=this.new.gen;
    this.new.app="no";


    console.log(this.model);
    console.log(this.new);
    console.log(this.i.name);

    this.data.addhstl(this.model,this.new);

    this.router.navigate(['/']);
  }

}
