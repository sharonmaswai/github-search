import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {UserserviceService} from '../userservice.service'
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  
  private userprofile: any=[];
  private username: string;
  private repositories: any = [];

  constructor( private userserviceService: UserserviceService) {}


  ngOnInit() {
  }
  getuserprofile(){

    this.userserviceService.fetchProfileDetails(this.username).subscribe(profile => {
      this.userprofile = profile;
   });
   this.userserviceService.fetchRepos().subscribe(repos => {
    this.repositories = repos;
  });
   

  }

}
