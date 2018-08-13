import { Component } from '@angular/core';

@Component({
  selector: 'd5',
  template: `
    <div [hidden]="!cousesAvailable()">
        cousess available
    </div>
    <div [hidden]="cousesAvailable()">
        cousess are not available
    </div>
  `,
  
})
export class D5Component {
  courses = ['JAVA', 'J2EE', 'ANGULAR', 'HADOOP'];
  //courses = [];
  cousesAvailable() : boolean
  {
      return this.courses.length > 0;
  }
}