import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public _storageService: StorageService,
  ) { }

  public async isLoggedIn(): Promise<boolean> {
    return await this._storageService.getItem('userInfo');
  }
}
