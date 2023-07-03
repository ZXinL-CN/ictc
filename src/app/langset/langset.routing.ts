import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangsetPage } from './components/langset.page';

const routes: Routes = [
  {
    path: '',
    component: LangsetPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LangsetPageRoutingModule {}
