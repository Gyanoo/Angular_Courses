import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';

import {Course} from 'src/app/models/Course'
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course:Course;
  @Output() deleteCourse: EventEmitter<Course> = new EventEmitter();
  @Input() index: number;
  courses:Course[];

  constructor(private courseService:CourseServiceService, private router: Router) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => this.courses = courses)
  }

  rateCourse(rate:number){
    if (rate >= 0 && rate<6){
      this.course.sumPoints+=rate;
      this.course.sumVotes++;
    }
    else alert("nielegalna ocena");
    return;
  }

  onDelete(){
    this.deleteCourse.emit(this.course);
  }
}
