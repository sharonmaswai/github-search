import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {UserserviceService} from './userservice.service';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { HomepageComponent } from './homepage/homepage.component';

const routes:Routes=[
  {path:"userprofile",component:UserprofileComponent},
  {path:"",redirectTo:"/homepage",pathMatch:"full"},
  {path:"homepage", component:HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    HomepageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RoutingModule

  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
