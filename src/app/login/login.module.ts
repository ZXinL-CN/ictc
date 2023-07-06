import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login.routing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LoginPage } from './components/login.page';


@NgModule({
  declarations: [LoginPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
