import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminmainbody',
  templateUrl: './adminmainbody.component.html',
  styleUrls: ['./adminmainbody.component.css']
})
export class AdminmainbodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('admin');
  }
  scroll() {
    // @ts-ignore: Object is possibly 'null'
     document.getElementById("admin").scrollIntoView();
 }

}
