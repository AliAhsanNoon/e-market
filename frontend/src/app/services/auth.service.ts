import { JwtHelperService } from './../helper/jwt-helper.service';
import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private api : ApiClientService, private jwtHelper : JwtHelperService) { }

  saveUser(data :any){
    return this.api.post('user/register', data);
  }

  loginUser(data :any){
    return this.api.post('user/login', data);
  }

  setAuthenticatedUser(data:any){
    this.jwtHelper.saveToken(data);
    this.jwtHelper.saveData('current-user', data);
  }

  getAuthenticatedUser(){
    let data = this.jwtHelper.getData('current-user');
    if(data){
      return data;
    }else{
      return false;
    }
  }

  isLoggedIn(){
    return !!this.jwtHelper.getToken();
  }

  removeLoggedInUser(){
    this.jwtHelper.removeData('current-user');
  }
}
