import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Drivers } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from './share/services/storage.service';

/**
 * 导出加载函数
 * @param http HttpClient对象
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'zh',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    IonicStorageModule.forRoot({
      name: '__ictc__db',
      storeName: '__ictc__store',
      driverOrder: [Drivers.LocalStorage, Drivers.IndexedDB],
    }),
  ],
  providers: [
    StorageService,
    TranslateService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule],
})
export class AppModule {

  constructor(
    private platform: Platform,
    public translate: TranslateService,
    public storageService: StorageService
  ) {
    this.platform.ready().then(async () => {
      await this.storageService.init();
      await this.initTranslateConfig();
    });
    console.log('App start...');
  }

  public async initTranslateConfig() {
    console.log('initTranslateConfig...');
    const lang = await this.storageService.getItem('lang');
    this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang(lang || 'zh');
    this.translate.use(lang || 'zh').subscribe(() => {
      console.log('语言切换：' + lang);
    });
  }
}
