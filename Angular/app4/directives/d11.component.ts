
import { Component } from '@angular/core';

@Component({
  selector: 'd11',
  template: `
    <button (click)="addNewCourse()">Add</button>
    <ul>
        <li *ngFor="let c1 of courses; even as e1; odd as o1; first as f1; last as l1">
            {{ "Course with id as " + c1.id + "  and name " + c1.name }}
            <span *ngIf="e1">[even record]</span>
            <span *ngIf="o1">[odd record]</span>
            <span *ngIf="f1">[first record]</span>
            <span *ngIf="l1">[last record]</span>
            <button (click)="removeCourse(c1)">Remove</button>
        </li>
    </ul>

  `,
  
})
export class D11Component {
    courses = [
        {id: 1, name: 'java'},
        {id: 2, name: 'j2ee'},
        {id: 3, name: 'angular'},
        {id: 4, name: 'hadoop'}
    ];
    addNewCourse()
    {
        this.courses.push({id: 5, name: 'Spring'});
    }
    removeCourse(course)
    {
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }
}
