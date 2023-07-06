import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyPage } from './components/my.page';

import { MyPageRoutingModule } from './my.routing';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyPageRoutingModule,
    TranslateModule
  ],
  declarations: [MyPage]
})
export class MyPageModule {}
