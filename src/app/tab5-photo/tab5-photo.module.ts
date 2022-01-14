import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab5PhotoPageRoutingModule } from './tab5-photo-routing.module';
import { Tab5PhotoPage } from './tab5-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PhotoPageRoutingModule
  ],
  declarations: [Tab5PhotoPage]
})
export class Tab5PhotoPageModule {}
