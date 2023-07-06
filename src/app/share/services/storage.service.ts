import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {}

  async init() {
    console.log('init storage...');
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async setItem(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public async getItem(key: string) {
    return await this._storage?.get(key);
  }

  public async removeItem(key: string) {
    return await this._storage?.remove(key);
  }

  public async clearItems() {
    return await this._storage?.clear();
  }
}
