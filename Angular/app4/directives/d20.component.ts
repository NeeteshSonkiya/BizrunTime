import { Component } from '@angular/core';

@Component({
  selector: 'd20',
  template: `
    <button class="c1" [ngClass]="{'c2': isActive, 'c3': isAnotherActive}">Button</button> 
    `,
  styles: ['.c1{color: red}', '.c2{font-size: 60px}', '.c3{padding: 10px}']
})
export class D20Component {
    isActive = true;
    isAnotherActive = false;


}