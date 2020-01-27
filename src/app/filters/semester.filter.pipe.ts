import { Pipe, PipeTransform } from "@angular/core";
import { Course } from '../models/Course';

@Pipe({
    name: 'semesterFilterPipe',
    pure: false
})

export class semesterFilterPipe implements PipeTransform {
    transform(courses: Course[], lfSem: number): Course[] {
        if (!courses) return [];
        if (!lfSem) return courses;
        lfSem = lfSem.valueOf();
        return courses.filter( course => {
            return course.semester.valueOf() == lfSem;
        })
    }
}