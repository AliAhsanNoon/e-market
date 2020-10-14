
import { Injectable } from '@angular/core';
import { StorageHelper } from './storage.helper';

@Injectable({
  providedIn: 'root'
})
export class JwtHelperService extends StorageHelper {

  getToken(): string {
    return this.getData('jwtToken');
  }

  saveToken(token: string) {
    this.saveData('jwtToken', token);
  }

  destroyToken() {
    this.removeData('jwtToken');
  }

}
