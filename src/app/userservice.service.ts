import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class UserserviceService {
  private username: string;
  private clientid= '94db5a1f7f6d586b214f';
  private clientsecret= 'bb2986adb9b8ccd044d394a2b8c8ed656a6403b1'; 
   
 
  constructor(private http:HttpClient) {
    
    this.username='sharonmaswai';
  }
 fetchProfileDetails(username) {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  } 
  fetchRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  } 
}
