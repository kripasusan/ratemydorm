import { Component, OnInit } from '@angular/core';
import { reviewmodel } from "../clg/reviewmodel";
import { hstlmodel } from "../clg/hstlmodel";
import { clgmodel } from "../main-body/clgmodel";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addclg',
  templateUrl: './addclg.component.html',
  styleUrls: ['./addclg.component.css']
})
export class AddclgComponent implements OnInit {

  constructor(public data:DataService,public router:Router) { }

  clgmodel=new clgmodel("","","");
  hstlmodel=new hstlmodel("","","");
  reviewmodel=new reviewmodel("","","","","","");

  ngOnInit(): void {
  }

  add(){
    this.hstlmodel.nameofclg=this.clgmodel.name;
    this.reviewmodel.nameofclg=this.clgmodel.name;
    this.reviewmodel.nameofhstl=this.hstlmodel.nameofhstl;
    this.hstlmodel.gen=this.reviewmodel.gen;
    this.reviewmodel.app="no";
    if(this.clgmodel.pic=="")
    {
      this.clgmodel.pic="https://www.scramsystems.com/blog/wp-content/uploads/cartoon-college-campus.jpg";
    }


    console.log(this.clgmodel);
    console.log(this.hstlmodel);
    console.log(this.reviewmodel);

    this.data.addclg(this.clgmodel,this.hstlmodel,this.reviewmodel);

    this.router.navigate(['/']);
  }

}
