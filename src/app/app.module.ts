import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
      defaultLanguage: "zh",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    TranslateService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule],
})
export class AppModule {

  // 默认语言
  private lang: any = 'zh';

  constructor(private platform: Platform, public translate: TranslateService) {
    platform.ready().then(async () => {
      this.initTranslateConfig();
    });
    console.log('App start...');
  }

  public initTranslateConfig() {
    console.log('initTranslateConfig...');
    // 添加要支持的语言
    this.translate.addLangs(['zh', 'en']);
    // 设置默认语言
    this.translate.setDefaultLang(this.lang);
    // 语言切换处理
    this.translate.use(this.lang).subscribe(() => {
      console.log('语言切换=' + this.lang);
    });
  }
}
