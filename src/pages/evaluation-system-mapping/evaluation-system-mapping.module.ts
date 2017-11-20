import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluationSystemMappingPage } from './evaluation-system-mapping';

@NgModule({
  declarations: [
    EvaluationSystemMappingPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluationSystemMappingPage),
  ],
})
export class EvaluationSystemMappingPageModule {}
