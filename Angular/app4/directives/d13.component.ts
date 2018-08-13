
import { Component } from '@angular/core';

@Component({
  selector: 'd13',
  template: `
    <button (click)="loadCourses()">LOad</button>
    <ul>
        <li *ngFor="let c1 of courses">
            {{ c1.name }}
         
        </li>
    </ul>

  `,
  
})
export class D13Component {
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
}