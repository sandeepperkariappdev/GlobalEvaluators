import { Component } from '@angular/core';

/**
 * Generated class for the StudentManagementComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'student-management',
  templateUrl: 'student-management.html'
})
export class StudentManagementComponent {

  text: string;

  constructor() {
    console.log('Hello StudentManagementComponent Component');
    this.text = 'Hello World';
  }

}
