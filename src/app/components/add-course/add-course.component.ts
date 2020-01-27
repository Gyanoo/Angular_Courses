import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  // @Input() course:Course;
  // @Output() addNewCourse: EventEmitter<Course> = new EventEmitter();
  
  name:string;
  ECTS:number;
  semester:number;
  form:string;
  maxStudents:number;
  rate: number; 
  description:string;
  image:string;

  constructor(private courseService:CourseServiceService, private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit(){
    const course = {
      name: this.name,
      ECTS: this.ECTS,
      semester: this.semester,
      form: this.form,
      maxStudents: this.maxStudents,
      description: this.description,
      sumPoints: this.rate,
      sumVotes: 1,
      image: this.image
    }
  // this.addNewCourse.emit(course);
  this.courseService.addNewCourse(course);
  }
}
