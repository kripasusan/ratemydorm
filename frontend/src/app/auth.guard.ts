import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {Router} from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private data:DataService,private router:Router){}
  canActivate () : boolean
  {
    if(this.data.loggedIn())
      return true;
      else
      this.router.navigate(['']);
      return false;
  }
    
  }
  
