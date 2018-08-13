import { Component } from '@angular/core';


@Component({
  selector: 'book6',
  template: `
                <button class = "btn" [class.btn-primary] = "isActive">Save</button>
            `
})
export class Book6Component 
{
    isActive = true; // false
}
