import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { deletereviewmodel } from "../adminviewreview/deletereview";

@Component({
  selector: 'app-adminrecentreview',
  templateUrl: './adminrecentreview.component.html',
  styleUrls: ['./adminrecentreview.component.css']
})
export class AdminrecentreviewComponent implements OnInit {

  constructor(public data:DataService,public router:Router) { }

  model:deletereviewmodel[]=[];

  ngOnInit(): void {
    this.data.approvereivewdata()
    .subscribe((res:any)=>{
      this.model=JSON.parse(JSON.stringify(res));
      console.log(this.model); 
    })
  }
  delete(_id:any){
    this.data.deletereview(_id);
    this.router.navigate(['/adminhome'])
  }
  ok(_id:any){
    this.data.approvedreview(_id);
    this.router.navigate(['/adminhome']);
  }


}
