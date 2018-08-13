import { Component, Input } from '@angular/core';

@Component({
  selector: 'book19',
  template: `
            Hello {{ param1 }}
            `
})
export class Book19Component 
{
    @Input() param1 = "Welcome to Angular World";
}
