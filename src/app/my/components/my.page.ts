import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/share/services/storage.service';

@Component({
  selector: 'app-my',
  templateUrl: 'my.page.html',
  styleUrls: ['my.page.scss']
})
export class MyPage implements OnInit {
  public usserInfo: {
    username: string;
  } = {
      username: ''
    };
  constructor(
    private translate: TranslateService,
    public router: Router,
    public _storageService: StorageService,
  ) { }

  async ngOnInit() {
    this.usserInfo = await this._storageService.getItem('userInfo');
  }

  public switchLang() {
    console.log(this.translate);
    this.router.navigate(['./tabs/langset'])
  }

  public onLogout() {
    this._storageService.removeItem('userInfo');
    this.router.navigate(['./login']);
  }

}
