import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyPage } from './components/my.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MyPageRoutingModule } from './my.routing';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MyPageRoutingModule,
    TranslateModule
  ],
  declarations: [MyPage]
})
export class MyPageModule {}
