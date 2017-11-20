import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationSystemPage } from './education-system';

@NgModule({
  declarations: [
    EducationSystemPage,
  ],
  imports: [
    IonicPageModule.forChild(EducationSystemPage),
  ],
})
export class EducationSystemPageModule {}
