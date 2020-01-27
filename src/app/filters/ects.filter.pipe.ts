import { Pipe, PipeTransform } from "@angular/core";
import { Course } from '../models/Course';

@Pipe({
    name: 'ECTSFilterPipe',
    pure: false
})

export class ECTSFilterPipe implements PipeTransform {
    transform(courses: Course[], lfECTS: number): Course[] {
        if (!courses) return [];
        if (!lfECTS) return courses;
        lfECTS = lfECTS.valueOf();
        return courses.filter( course => {
            return course.ECTS.valueOf() == lfECTS;
        })
    }
}