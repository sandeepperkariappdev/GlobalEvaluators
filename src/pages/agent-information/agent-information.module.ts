import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentInformationPage } from './agent-information';

@NgModule({
  declarations: [
    AgentInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentInformationPage),
  ],
})
export class AgentInformationPageModule {}
