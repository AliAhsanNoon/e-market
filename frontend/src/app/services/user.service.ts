import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api : ApiClientService) { }

  saveUser(data :any){
    return this.api.post('user/register', data);
  }
  loginUser(data :any){
    return this.api.post('user/login', data);
  }
}
