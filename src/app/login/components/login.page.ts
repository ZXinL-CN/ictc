import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/share/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';
  constructor(
    public _router: Router,
    public _storageService: StorageService,
  ) { }

  ngOnInit() { }

  public async onLogin() {
    await this._storageService.setItem('userInfo', { username: this.username, password: this.password });
    this._router.navigate(['/tabs/my']);
  }

  public goHome() {
    this._router.navigate(['/tabs/home']);
  }

  get enLogin() {
    return this.username && this.password;
  }

}
