import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPage } from './components/my.page';

const routes: Routes = [
  {
    path: '',
    component: MyPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPageRoutingModule {}
