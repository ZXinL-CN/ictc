import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my',
  templateUrl: 'my.page.html',
  styleUrls: ['my.page.scss']
})
export class MyPage {

  constructor(
    private translate: TranslateService,
    public router: Router,
  ) {}

  public switchLang() {
    console.log(this.translate);
    this.router.navigate(['./tabs/langset'])
  }

}
