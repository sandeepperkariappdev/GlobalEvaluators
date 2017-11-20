import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StudentMangStatus, StudentCourses, StudentMarksEntry, StudentEduDetails, Student}  from "../../Models/models"
/**
 * Generated class for the StudentManagementEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-student-management-edit',
  templateUrl: 'student-management-edit.html',
})
export class StudentManagementEditPage {
  public optionView:string;
  public studentItem : Student;
  public studentEduDetails : Array<StudentEduDetails> = [];
  public studentsCoursesList:Array<StudentCourses> = [];
  public studentCourses:Array<StudentCourses> = [];
  public studentMarksEntry:StudentMarksEntry;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionView = 'basic';
    this.studentsCoursesList.push(new StudentCourses("","",0,0,0,0,"",false, false));

    this.studentEduDetails.push(new StudentEduDetails("", "","","","","","","",
    "","","",false,""));
    
    this.studentMarksEntry =  new StudentMarksEntry(0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,this.studentsCoursesList); 
    this.studentItem = new Student("","","","","","","",
    new StudentMangStatus(0, ""), 
    this.studentEduDetails,this.studentMarksEntry);   
  }

  ionViewDidLoad() {
    const navParams = this.navParams.data;
    if(navParams.selStudentInfo !== undefined){
      this.studentItem = navParams.selStudentInfo;
    }
  }
  public updateStudentInfo():void{
      // TODO Call service to update Basic Student Info
  }
  public editCourseItemClicked():void{

  }
  public deleteCourseItemClicked():void{

  }
  public addNewCourseItem():void{
    this.studentsCoursesList.push(new StudentCourses("","",0,0,0,0,"",false, false));    
  }
}
