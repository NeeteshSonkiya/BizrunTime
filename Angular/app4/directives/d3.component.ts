import { Component } from '@angular/core';

@Component({
  selector: 'd3',
  template: `
    <div *ngIf="cousesAvailable(); else noCourses">
        cousess available
    </div>
    <ng-template #noCourses>
        no cousess available
    </ng-template>    
  `,
  
})
export class D3Component {
  //courses = ['JAVA', 'J2EE', 'ANGULAR', 'HADOOP'];
  courses = [];
  cousesAvailable() : boolean
  {
      return this.courses.length > 0;
  }
}