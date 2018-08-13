import { Component } from '@angular/core';

@Component({
  selector: 'd2',
  template: `
    <div *ngIf="cousesAvailable()">
        cousess available
    </div>
    <div *ngIf="!cousesAvailable()">
        no cousess available
    </div>    
  `,
  
})
export class D2Component {
  //courses = ['JAVA', 'J2EE', 'ANGULAR', 'HADOOP'];
  courses = [];
  cousesAvailable() : boolean
  {
      return this.courses.length > 0;
  }
}