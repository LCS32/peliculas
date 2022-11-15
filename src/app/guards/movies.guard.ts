import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StorageNameSpace } from '../model/storage.model';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesGuard implements CanActivate {
  constructor(
    private router: Router,
    private readonly storageService: StorageService,
    ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.storageService.getJasonValue(StorageNameSpace.Storage.RequestToken) && this.storageService.getJasonValue(StorageNameSpace.Storage.FlagLogin)) {
      return true;
    } 

    this.router.navigate(['iniciar-sesion'])
    return false;
  }

    

}

// voy en 2:40:21


