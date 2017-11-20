   export class StudentMangStatus {
    constructor(public id:number,public name:string){}
  }
  
  export class StudentCourses{
    constructor(public courseName:string,
      public courseType:string,
      public grossMax:number,
      public grossSecured:number,
      public foreignCredits:number,
      public usCredits:number,
      public gradeLetter:string,
      public included:boolean,
      public isReadOnly?:boolean,
    ){}
  }
  
  export class StudentMarksEntry{
    constructor(public netGPA:number,
      public netWeightedGPA:number,
      public totalMax:number,
      public totalSecured:number,
      public netMax:number,
      public netSecured:number,
      public totalForeignCredits:number,
      public totalUSCredits:number,
      public grossGPA:number,
      public grossWeightedGPA:number,
      public coursesList:Array<StudentCourses>){}
  }
  export  class StudentEduDetails{
    constructor(public programType:string,
      public countryOfEducation:string,
      public purpose:string,
      public evaluationName:string,
      public universityName:string,
      public programStartDate:string,
      public programEndDate:string,
      public lengthOfprogram:string,
      public programOfStudy:string,
      public admissionRequirements:string,
      public usEquivalency:string,
      public graduated:boolean,
      public notes:string){}
  }
  export class Student{  
    constructor(public studentId:string,              
                public dateOfBirth:string,
                public firstName:string,
                public lastName:string,
                public passport:string,
                public agent:string,
                public nationality:string,
                public studentMangStatus:StudentMangStatus,
                public studentEduDetails:Array<StudentEduDetails>,
                public studentMarksEntry:StudentMarksEntry){}
  }
  