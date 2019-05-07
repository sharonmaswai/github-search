import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {UserserviceService} from '../userservice.service'
import { Profile } from 'selenium-webdriver/firefox';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  
  profile: any[];
  username: string;
  repos: any = [];

  constructor( private userserviceService: UserserviceService) {}


  ngOnInit() {
  }
  getuserprofile(){
    
    this.userserviceService.fetchProfileDetails().subscribe(profile => {
      this.profile = profile ;
      console.log(profile);
   });
   this.userserviceService.fetchRepos().subscribe(repos => {
    this.repos = repos;
    console.log(repos)
  });
   

  }

}
