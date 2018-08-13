import { Component } from '@angular/core';

@Component({
  selector: 'd26',
  template: `
    value : {{batch.course.author}}
    `
})
export class D26Component {
   batch = {
       course: {
            title: 'java',
            author: null
       },
       duration: 120,
       price: 50000
   }
}