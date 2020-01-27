import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Course} from 'src/app/models/Course';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  @Input() index:number;
  @Input() rate:number;
  @Output() rateCourse: EventEmitter<any> = new EventEmitter();

  courses: Course[];
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseServiceService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getCourse();
  }

  updateCourse(){
  //  this.rateCourse.emit(this.rate);
     if (this.rate >= 0 && this.rate<6){
       this.course.sumPoints+=this.rate;
       this.course.sumVotes++;
     }
     else alert("nielegalna ocena");
  }

  getCourse(){
    const id = +this.route.snapshot.paramMap.get('index');
    this.courseService.getCourse(id)
      .subscribe(course => this.course = course);
  }

}