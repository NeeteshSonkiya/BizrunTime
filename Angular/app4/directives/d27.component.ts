import { Component } from '@angular/core';

@Component({
  selector: 'd27',
  template: `
    value : {{batch.course.author}} 
    `
})
export class D27Component {
   batch = {
       course: null,
       duration: 120,
       price: 50000
   }
}