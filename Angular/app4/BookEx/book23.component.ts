import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'book23',
  template: `
            from book23 {{ param1 }}
            `
})
export class Book23Component 
{
    @Input() param1 = "default value";
}
