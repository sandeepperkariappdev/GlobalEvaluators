import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentManagementEditPage } from '../student-management-edit/student-management-edit';
import {StudentMangStatus, StudentCourses, StudentMarksEntry, StudentEduDetails, Student}  from "../../Models/models";
/**
 * Generated class for the StudentManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-student-management',
  templateUrl: 'student-management.html',
})
export class StudentManagementPage {  
  public studentsList:Array<Student> = [];
  public studentsCoursesList:Array<StudentCourses> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.studentsCoursesList.push(new StudentCourses("english","",100,70,6,4,"",true));
    this.studentsCoursesList.push(new StudentCourses("Mathematics","",100,55,7,4,"",true));
    this.studentsCoursesList.push(new StudentCourses("Engineering Physics","",100,45,8,4,"",true));
    this.studentsCoursesList.push(new StudentCourses("Engineering Chemistry","",100,70,9,4,"",true));

    this.studentsList.push(new Student("GE 3000","10/01/1981","Aditya","Tallapally","qwe12345","Mohan Overseas","Indian",
    new StudentMangStatus(4, "Ready For Generate"), 
    new Array(new StudentEduDetails("Bachelor", "India","Higher Education","JNTU","JNTU","10/01/2005","10/01/2009","4 years",
    "Bachelor Of technology in Computer Science","completion of Intermediate","Bachelor Of Science is Computer",true,"")),
    new StudentMarksEntry(3.00,3.00,400,240,300,170,6,12,3.25,3.25,this.studentsCoursesList)));

    this.studentsList.push(new Student("GE 3000","10/01/1969","Vinay","Kotha","asdf5678","Mohan Overseas","Indian",
    new StudentMangStatus(4, "Ready For Generate"), 
    new Array(new StudentEduDetails("Bachelor", "India","Higher Education","JNTU","JNTU","10/01/2005","10/01/2009","4 years",
    "Bachelor Of technology in Computer Science","completion of Intermediate","Bachelor Of Science is Computer",true,"")),
    new StudentMarksEntry(3.00,3.00,400,240,300,170,6,12,3.25,3.25,this.studentsCoursesList)));

    this.studentsList.push(new Student("GE 3000","29/02/1981","Praveen","Gantasala","zxcv9876","Mohan Overseas","Indian",
    new StudentMangStatus(4, "Ready For Generate"), 
    new Array(new StudentEduDetails("Bachelor", "India","Higher Education","JNTU","JNTU","10/01/2005","10/01/2009","4 years",
    "Bachelor Of technology in Computer Science","completion of Intermediate","Bachelor Of Science is Computer",true,"")),
    new StudentMarksEntry(3.00,3.00,400,240,300,170,6,12,3.25,3.25,this.studentsCoursesList)));    
  }

  ionViewDidLoad() { }

  public editStudentDetails(item:Student){
    this.navCtrl.push(StudentManagementEditPage,{"selStudentInfo":item});
  }
}
