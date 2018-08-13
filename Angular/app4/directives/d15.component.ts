import { Component } from '@angular/core';

@Component({
  selector: 'd15',
  template: `
    <ng-template [ngIf]="courses.length > 0">
        <div> some courses available</div>
    </ng-template>
    
    <ng-template [ngIf]="courses.length == 0">
        <div> no courses available</div>
    </ng-template>

 
    `,
  
})
export class D15Component {
    courses = [
            {id: 1, name: 'java'},
            {id: 2, name: 'j2ee'},
            {id: 3, name: 'angular'},
            {id: 4, name: 'hadoop'}
        ];
}