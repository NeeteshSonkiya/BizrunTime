import { Component } from '@angular/core';

@Component({
  selector: 'd29',
  template: `
    value : {{batch.course?.author}}        <!-- safe trversal operator-->
    ` 
})
export class D29Component {
   batch = {
       course: null,
       duration: 120,
       price: 50000
   }
}
