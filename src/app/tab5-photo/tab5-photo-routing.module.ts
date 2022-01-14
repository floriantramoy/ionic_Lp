import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5PhotoPage } from './tab5-photo.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5PhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5PhotoPageRoutingModule {}
