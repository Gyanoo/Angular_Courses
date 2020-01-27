import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';

import {Course} from '../models/Course';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  // coursesUrl:string = 'https://my-json-server.typicode.com/gyanoo/angular-kursy/courses'
  coursesUrl:string = 'http://localhost:4200/assets/data.json';
  courses:Course[];
  
  constructor(private http:HttpClient) { 
    this.http.get<Course[]>(this.coursesUrl).subscribe(courses => this.courses = courses);
  }

  getCourses():Observable<Course[]>{
    // return this.http.get<Course[]>(this.coursesUrl);
    // return this.http.get<Course[]>(this.coursesUrl);
    return of(this.courses);
  }
  
  getCourse(index:number):Observable<Course>{
    return this.getCourses().pipe(map(arr => arr[index]));
  }

  deleteCourse(course:Course){
    // const url = `${this.coursesUrl}/${course.name}`;
    // return this.http.delete<Course>(url,httpOptions);
    this.courses.splice(this.courses.indexOf(course), 1);
  }
  
  addNewCourse(course:Course){
    // return this.http.post<Course>(this.coursesUrl, course, httpOptions);
    this.courses.push(course);
  }

}
