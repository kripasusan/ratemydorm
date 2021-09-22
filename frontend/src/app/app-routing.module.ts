import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclgComponent } from './addclg/addclg.component';
import { AddfullComponent } from './addfull/addfull.component';
import { AddhstlComponent } from './addhstl/addhstl.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminmaddclgComponent } from './adminmaddclg/adminmaddclg.component';
import { AdminmaddhstlComponent } from './adminmaddhstl/adminmaddhstl.component';
import { AdminmdeleteclgComponent } from './adminmdeleteclg/adminmdeleteclg.component';
import { AdminmdeletehstlComponent } from './adminmdeletehstl/adminmdeletehstl.component';
import { AdminrecentreviewComponent } from './adminrecentreview/adminrecentreview.component';
import { AdminviewreviewComponent } from './adminviewreview/adminviewreview.component';
import { AuthGuard } from './auth.guard';
import { AuthsGuard } from './auths.guard';
import { ClgComponent } from './clg/clg.component';
import { hstlmodel } from './clg/hstlmodel';
import { HstlComponent } from './hstl/hstl.component';
import { LoginComponent } from './login/login.component';
import { clgmodel } from './main-body/clgmodel';
import { MainBodyComponent } from './main-body/main-body.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '',component: MainBodyComponent},
  { path: 'home', component:MainBodyComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'clg', component: ClgComponent},
  {path:'dorm',component:HstlComponent},
  {path:'addclg',component:AddclgComponent,canActivate:[AuthGuard]},
  {path:'addhstl',component:AddhstlComponent,canActivate:[AuthGuard]},
  {path:'addreview',component:AddreviewComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent,canActivate:[AuthsGuard],
        children:[{path:'addclg',component:AdminmaddclgComponent,canActivate:[AuthsGuard]},
                  {path:'deleteclg',component:AdminmdeleteclgComponent,canActivate:[AuthsGuard]},
                  {path:'deletehstl',component:AdminmdeletehstlComponent,canActivate:[AuthsGuard]},
                  {path:'viewreview',component:AdminviewreviewComponent,canActivate:[AuthsGuard]},
                  {path:'recentreview',component:AdminrecentreviewComponent,canActivate:[AuthsGuard]}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
