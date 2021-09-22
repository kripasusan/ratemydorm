import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { hstlmodel } from "./hstlmodel";
import { reviewmodel } from "./reviewmodel";

@Component({
  selector: 'app-clg',
  templateUrl: './clg.component.html',
  styleUrls: ['./clg.component.css']
})
export class ClgComponent implements OnInit {

  i:any;
  model:hstlmodel[]=[];
  new:reviewmodel[]=[];
  length:boolean=true;
  check:any;
  index:any=0;

  constructor(public router:Router,public data:DataService) { }

  ngOnInit(): void {
    this.i=history.state.data;
    console.log(this.i);
    this.data.hstldata(this.i.name)
    .subscribe((res:any)=>{
      this.model=JSON.parse(JSON.stringify(res));
      console.log(this.model); 
      if(this.model.length== 0)
      this.length=false;
    }) 
    this.check=this.model;
    this.check=this.i;
    console.log(this.check);
  }
  back(){
    this.router.navigate(['']);
  }
  men(){
    this.data.hstlspec(this.i.name,"m")
    .subscribe((res:any)=>{
      this.model=JSON.parse(JSON.stringify(res));
      console.log(this.model);
      if(this.model.length== 0)
      this.length=false;
    })
  }
  women(){
    this.data.hstlspec(this.i.name,"w")
    .subscribe((res:any)=>{
      this.model=JSON.parse(JSON.stringify(res));
      console.log(this.model);
      if(this.model.length== 0)
      this.length=false;
    })
  }
  hstls(m:any,k:any){
    console.log("inside clg");
    console.log(m);
    console.log(k);
    this.data.review(m,k)
    .subscribe((res:any)=>{
      this.new=JSON.parse(JSON.stringify(res));
      console.log(this.new);
      // if(this.new.length==0){this.index=1}
      this.router.navigate(['/dorm'],{state:{"data":this.new,"value":this.i}});
    });
  }
  addhstl(){
    this.router.navigate(['/addhstl'],{state:{"data":this.i}});
  }

}
