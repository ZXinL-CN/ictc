import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LangsetPage } from './components/langset.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LangsetPageRoutingModule } from './langset.routing';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LangsetPageRoutingModule,
    TranslateModule,
  ],
  declarations: [LangsetPage]
})
export class LangsetPageModule {}
