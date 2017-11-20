import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentGeneratedReportsPage } from './student-generated-reports';

@NgModule({
  declarations: [
    StudentGeneratedReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentGeneratedReportsPage),
  ],
})
export class StudentGeneratedReportsPageModule {}
