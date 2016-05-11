import {Component} from 'angular2/core';
import {CourseService} from "./course.service";

@Component({
    selector: 'courses',
    providers: [CourseService],
    template: `
        <div>
        <h2>Courses</h2>
        {{ title }}
        <ul>
            <li *ngFor="#course of courses">
            {{ course }}
            </li>
        </ul>
        </div>
        `
})

export class CoursesComponent {
    title = "Our courses:";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }

}