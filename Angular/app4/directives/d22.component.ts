import { Component } from '@angular/core';

@Component({
  selector: 'd22',
  template: `
    <button [style.background-color] = "isActive ? 'green' : 'white'">Button</button> 
    `
})
export class D22Component {
    isActive = true;
}