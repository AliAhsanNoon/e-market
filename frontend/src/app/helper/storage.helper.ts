import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageHelper{

  getData(key: string): string {
    return window.localStorage[key]
  };

  saveData(key: string, data: any) {
    window.localStorage[key] = data;
  }

  removeData(key: string) {
    return window.localStorage.removeItem(key);
  }
}
