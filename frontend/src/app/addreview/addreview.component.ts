import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { reviewmodel } from "../clg/reviewmodel";
import { DataService } from "../data.service";

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  constructor(public router:Router,public data:DataService) { }
  i:any;
  model=new reviewmodel("","","","","","");
  
  ngOnInit(): void {
    this.i=history.state.data;
    console.log(this.i);
    this.model.nameofclg=this.i[0].nameofclg;
    this.model.nameofhstl=this.i[0].nameofhstl;
    this.model.gen=this.i[0].gen;
  }
  add(){
    this.model.app="no";
    console.log(this.model);
    this.data.addreview(this.model);
    this.router.navigate(['/']);
  }

}
