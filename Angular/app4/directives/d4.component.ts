import { Component } from '@angular/core';

@Component({
  selector: 'd4',
  template: `
    <div *ngIf="cousesAvailable(); then coursesList else noCourses">
    </div>
    <ng-template #coursesList>
        cousess available
    </ng-template>
    <ng-template #noCourses>
        no cousess available
    </ng-template>    
  `,
  
})
export class D4Component {
  courses = ['JAVA', 'J2EE', 'ANGULAR', 'HADOOP'];
  //courses = [];
  cousesAvailable() : boolean
  {
      return this.courses.length > 0;
  }
}

