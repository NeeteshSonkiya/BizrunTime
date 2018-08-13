import { Component } from '@angular/core';

@Component({
  selector: 'd24',
  template: `
    <button [ngStyle]="{
            'background-color' : isActive ? 'gray' : 'white',
            'color' : isActive ? 'blue' : 'red',
            'fontweight' : isActive ? 'bold' : 'normal'}"
    >Button</button> 
    `
})
export class D24Component {
    isActive = false;
}