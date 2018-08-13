import { Component } from '@angular/core';

@Component({
  selector: 'book1',
  template: `
                <ul>
                    <li *ngFor=" let book of books ">
                        {{ book }}
                    </li>
                </ul>
            `
})
export class Book1Component 
{
    books = ['java', 'j2ee', 'spring'];
}
//*ngFor - as a directory