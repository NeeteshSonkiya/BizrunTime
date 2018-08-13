
import { Component } from '@angular/core';

@Component({
  selector: 'd14',
  template: `
    <button (click)="loadCourses()">LOad</button>
    <button (click)="addCourses()">Add</button>
    <ul>
        <li *ngFor="let c1 of courses;trackBy: trackCourse">
            {{ c1.name }}
         
        </li>
    </ul>

  `,
  
})
export class D14Component {
    courses;
    loadCourses()
    {
        this.courses = [
            {id: 1, name: 'java'},
            {id: 2, name: 'j2ee'},
            {id: 3, name: 'angular'},
            {id: 4, name: 'hadoop'}
        ];
    }
    addCourses()
    {
        this.courses.push({id: 5, name: 'java script'})
    }
    trackCourse(index, course)
    {
        course ? course.id : undefined;
    }
}