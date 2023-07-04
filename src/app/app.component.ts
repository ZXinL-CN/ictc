import { Component, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { register } from 'swiper/element/bundle';
import { StorageService } from './share/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(
    private translate: TranslateService,
    private storageService: StorageService
  ) {
    register();
  }

  async ngOnInit(): Promise<void> {
    // const defaultLang = await this.storageService.getItem('lang') || 'zh';
    // this.translate.setDefaultLang(defaultLang);
  }

  async ngAfterViewInit(): Promise<void> {
    const defaultLang = await this.storageService.getItem('lang') || 'zh';
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }
}
