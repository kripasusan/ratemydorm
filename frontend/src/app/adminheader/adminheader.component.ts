import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  remove()
  {
    localStorage.removeItem("admin");
    this.router.navigate(['admin'])
  }
}
