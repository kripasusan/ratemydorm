import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../data.service";
// import { hstlmodel } from "../clg/hstlmodel";
import { reviewmodel } from "../clg/reviewmodel";

@Component({
  selector: 'app-hstl',
  templateUrl: './hstl.component.html',
  styleUrls: ['./hstl.component.css']
})
export class HstlComponent implements OnInit {

  constructor(public router:Router,public data:DataService) { }
  model:any;
  i:any;
  value:any='';
  bool:boolean=false;

  ngOnInit(): void {
    this.model=history.state.data;
    this.i=history.state.value;
    if(this.model==0){
      this.bool=true;
      console.log("j");
      this.value="no reviews";
    }
    console.log(this.i);
    // console.log(this.model[0].nameofhstl);
    
  }
  back(){
    this.router.navigate(['/clg'],{state:{"data":this.i}});
  }
  add(){
      this.router.navigate(['/addreview'],{state:{"data":this.model}});
  }
  

}
