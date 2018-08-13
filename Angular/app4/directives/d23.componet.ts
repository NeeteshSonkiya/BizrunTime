import { Component } from '@angular/core';

@Component({
  selector: 'd23',
  template: `
    <button [style.background-color] = "isActive ? 'gray' : 'white'"
            [style.color] = "isActive ? 'blue' : 'red'"
            [style.fontweight] = "isActive ? 'bold' : 'normal'"
    >Button</button> 
    `
})
export class D23Component {
    isActive = false;
}