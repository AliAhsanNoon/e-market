import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private api: ApiClientService) { }
  loadCategories(){
    return this.api.get('category');
  }
}
