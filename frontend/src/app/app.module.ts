import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { SubfooterComponent } from './subfooter/subfooter.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ClgComponent } from './clg/clg.component';
import { HstlComponent } from './hstl/hstl.component';
import { AddclgComponent } from './addclg/addclg.component';
import { AddhstlComponent } from './addhstl/addhstl.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { AddfullComponent } from './addfull/addfull.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminComponent } from './admin/admin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdminmainbodyComponent } from './adminmainbody/adminmainbody.component';
import { AdminmaddclgComponent } from './adminmaddclg/adminmaddclg.component';
import { AdminmaddhstlComponent } from './adminmaddhstl/adminmaddhstl.component';
import { AdminmdeleteclgComponent } from './adminmdeleteclg/adminmdeleteclg.component';
import { AdminmdeletehstlComponent } from './adminmdeletehstl/adminmdeletehstl.component';
import { AdminviewreviewComponent } from './adminviewreview/adminviewreview.component';
import { AdmindeletereviewComponent } from './admindeletereview/admindeletereview.component';
import { AdminrecentreviewComponent } from './adminrecentreview/adminrecentreview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubheaderComponent,
    SubfooterComponent,
    MainBodyComponent,
    LoginComponent,
    SignupComponent,
    ClgComponent,
    HstlComponent,
    AddclgComponent,
    AddhstlComponent,
    AddreviewComponent,
    AddfullComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminmainbodyComponent,
    AdminmaddclgComponent,
    AdminmaddhstlComponent,
    AdminmdeleteclgComponent,
    AdminmdeletehstlComponent,
    AdminviewreviewComponent,
    AdmindeletereviewComponent,
    AdminrecentreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
