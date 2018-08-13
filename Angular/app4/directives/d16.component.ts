import { Component } from '@angular/core';

@Component({
  selector: 'd16',
  template: `
    <div *ngIf="courses.length > 0; then listOfCourses else noCourses"></div>  

    <ng-template #listOfCourses>
       some courses available from d16
    </ng-template>
    
    <ng-template #noCourses>
       no courses available
    </ng-template>

 
    `,
  
})
export class D16Component {
    courses = [
            {id: 1, name: 'java'},
            {id: 2, name: 'j2ee'},
            {id: 3, name: 'angular'},
            {id: 4, name: 'hadoop'}
        ];
}
