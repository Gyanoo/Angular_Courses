import { Pipe, PipeTransform } from "@angular/core";
import { Course } from '../models/Course';

@Pipe({
    name: 'nameFilterPipe',
    pure: false
})

export class nameFilterPipe implements PipeTransform {
    transform(courses: Course[], lfName: string): Course[] {
        if (!courses) return [];
        if (!lfName) return courses;
        lfName = lfName.valueOf();
        return courses.filter( course => {
            return course.name.valueOf().toLowerCase() == lfName.toLowerCase();
        })
    }
}