import { Component, OnInit, Input } from '@angular/core';
import {Course} from 'src/app/models/Course'
import { CourseServiceService } from 'src/app/services/course-service.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // @Input() rate:number;
  courses:Course[]  
  // columnNames:string[]
  constructor(private courseService:CourseServiceService) { }

  ngOnInit() {
    // this.columnNames=['name','ECTS','semester',
    // 'form','maxStudents','rate','description']
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  deleteCourse(course:Course){
    // this.courses = this.courses.filter(c => c.name !== course.name);
    // this.courseService.deleteCourse(course).subscribe();
    this.courseService.deleteCourse(course);
  }

  // addNewCourse(course:Course){
  //   // this.courseService.addCourse(course).subscribe(course =>{
  //   //   this.courses.push(course);
  //   // });
  //   // this.courses.push(course);
  //   this.courseService.addNewCourse(course);
  // }
}
