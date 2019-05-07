import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {HomepageComponent} from './homepage/homepage.component';
 const routes:Routes=[
  {path:"userprofile",component:UserprofileComponent},
  {path:"",redirectTo:"/homepage",pathMatch:"full"},
  {path:"homepage", component:HomepageComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
