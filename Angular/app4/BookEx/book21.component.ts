import { Component, Input } from '@angular/core';

@Component({
  selector: 'book21',
  template: `
            Hello {{ authorName }}
            `,
  inputs: ['author']
})
export class Book21Component 
{
    authorName = "from Book21Component";
}
