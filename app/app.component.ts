import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {SearchfieldComponent} from "./searchfield.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Welcome to our learning group</h1>
        <searchfield></searchfield>
        <courses></courses>
        <authors></authors>`,
    directives: [SearchfieldComponent, CoursesComponent, AuthorsComponent]
})
export class AppComponent { }