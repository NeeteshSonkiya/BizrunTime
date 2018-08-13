import { Component } from '@angular/core';

@Component({
  selector: 'd25',
  template: `
    value : {{batch.course.author}} ,
    value : {{batch.price}},
    value : {{batch.duration}}
    `
})
export class D25Component {
   batch = {
       course: {
            title: 'java',
            author: 'raman'
       },
       duration: 120,
       price: 50000
   }
}