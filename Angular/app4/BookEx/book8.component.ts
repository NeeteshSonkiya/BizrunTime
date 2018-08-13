import { Component } from '@angular/core';


@Component({
  selector: 'book8',
  template: `
                <button [style.background-color] = "isActive ? 'blue' : 'white'">Save</button>
            `
})
export class Book8Component 
{
    isActive = true; // false
}
