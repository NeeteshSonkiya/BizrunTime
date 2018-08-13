import { Component } from '@angular/core';

@Component({
  selector: 'd19',
  template: `
    <button class="c3" [class.c1] = "isActive" [class.c2] = "isAnotherActive">Button</button> 
    `,
  styles: ['.c1{color: red}', '.c2{font-size: 60px}', '.c3{padding: 10px}']
})
export class D19Component {
    isActive = false;
    isAnotherActive = true;

}