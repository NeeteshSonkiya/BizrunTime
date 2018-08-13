import { Component } from '@angular/core';

@Component({
  selector: 'd1',
  template: `
    <div *ngIf="courses.length > 0">
        cousess available
    </div>
    <div *ngIf="courses.length == 0">
        no cousess available
    </div>    
  `,
  
})
export class D1Component {
  courses = ['JAVA', 'J2EE', 'ANGULAR', 'HADOOP'];
  //courses = [];
}