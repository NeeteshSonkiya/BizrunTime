import { Component } from '@angular/core';

@Component({
  selector: 'd18',
  template: `
    <button class="c2 c3" [class.c1] = "isActive">Button</button> 
    `,
  styles: ['.c1{color: red}', '.c2{font-size: 60px}', '.c3{padding: 10px}']
})
export class D18Component {
    isActive = true;
}