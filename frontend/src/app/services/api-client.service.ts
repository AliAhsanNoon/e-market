import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http : HttpClient) { }

  get(path:string){
    return this.http.get(`${environment.apiUrl}${path}`);
  }

  post(path:string, data:any){
    return this.http.post(`${environment.apiUrl}${path}`,data);
  }
  put(path:string, data:any){
    return this.http.put(`${environment.apiUrl}${path}`,data);
  }
}
