import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DateSelectionPage } from './date-selection.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [DateSelectionPage],
  exports: [DateSelectionPage]
})
export class DateSelectionPageModule {}
