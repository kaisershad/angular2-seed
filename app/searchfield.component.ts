import {Component} from 'angular2/core';
import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
    selector: 'searchfield',
    directives: [AutoGrowDirective],
    template: `
        {{ title }}
        <input type="text" autoGrow />
    `
})

export class SearchfieldComponent {
    title = "Search for courses or authors ";
    searchfield;
}