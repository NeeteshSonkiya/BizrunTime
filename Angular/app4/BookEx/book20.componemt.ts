import { Component, Input } from '@angular/core';

@Component({
  selector: 'book20',
  template: `
            Hello {{ firstName }}
            `
})
export class Book20Component 
{
    @Input("fn") firstName = "from Book20Component";
}
