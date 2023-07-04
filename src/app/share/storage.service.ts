import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public async getItem(key: string): Promise<any> {
    const { value } = await Preferences.get({ key });
    return value && JSON.parse(value);
  }

  public async setItem(key: string, value: any): Promise<any> {
    return await Preferences.set({
      key,
      value: JSON.stringify(value),
    });
  }

  public async removeItem(key: string): Promise<any> {
    await Preferences.remove({ key });
  }

  public async clearItems(): Promise<any> {
    await Preferences.clear();
  }
}
