import { Injectable } from '@angular/core';
import { SecurityStorageService } from './security-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private readonly securityStorageService: SecurityStorageService
  ) { }

  setJasonValue(key: string, value: string){
    this.securityStorageService.secureStorage.setItem(key, value)
  }

  getJasonValue(key: string){
    return this.securityStorageService.secureStorage.getItem(key)
  }

  clearItemsStorage() {
    this.securityStorageService.secureStorage.clear();
  }

  clearItemStorage(key: string) {
    this.securityStorageService.secureStorage.clear(key);
  }
}
