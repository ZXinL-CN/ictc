import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/share/services/storage.service';

@Component({
  selector: 'app-langset',
  templateUrl: './langset.page.html',
  styleUrls: ['./langset.page.scss'],
})
export class LangsetPage implements OnInit {
  constructor(
    private translate: TranslateService,
    private _storageService: StorageService
  ) {}

  public defaultLang: string = '';

  ngOnInit() {
    this.defaultLang = this.translate.getDefaultLang();
  }

  public changeLanguage(lang: any) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang).subscribe(() => {
      this._storageService.setItem('lang', lang);
    });
  }
}
