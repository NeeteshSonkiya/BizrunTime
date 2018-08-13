import { Component } from '@angular/core';

@Component({
  selector: 'd28',
  template: `
    value : <span *ngIf="batch.course">
                {{batch.course.author}}
            </span>
    `
})
export class D28Component {
   batch = {
       course: null,
       duration: 120,
       price: 50000
   }
}