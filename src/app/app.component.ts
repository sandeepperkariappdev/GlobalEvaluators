import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {UserManagementPage} from "../pages/user-management/user-management";
import {AgentInformationPage} from "../pages/agent-information/agent-information";
import {EducationSystemPage} from "../pages/education-system/education-system";
import {EvaluationSystemMappingPage} from "../pages/evaluation-system-mapping/evaluation-system-mapping";
import {SourceUniversityInformationPage} from "../pages/source-university-information/source-university-information";
import {StudentGeneratedReportsPage} from "../pages/student-generated-reports/student-generated-reports";
import {StudentManagementPage} from "../pages/student-management/student-management";
import {UsUniversityInformationPage} from "../pages/us-university-information/us-university-information";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StudentManagementPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'UserManagment', component: UserManagementPage },
      { title: 'Education System', component: EducationSystemPage },
      { title: 'Agent Information', component: AgentInformationPage },
      { title: 'Source University Info', component: SourceUniversityInformationPage },
      { title: 'US University Info', component: UsUniversityInformationPage },
      { title: 'Evaluation System Mapping', component: EvaluationSystemMappingPage },
      { title: 'Student Management', component: StudentManagementPage },      
      { title: 'Student Generated Reports', component: StudentGeneratedReportsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
