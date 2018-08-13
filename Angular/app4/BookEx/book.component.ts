import { Component } from '@angular/core';

@Component({
  selector: 'book',
  template: `
                <ul>
                    <li> {{books[0]}} </li>
                    <li> {{books[1]}} </li>
                    <li> {{books[2]}} </li>
                </ul>
            `
})
export class BookComponent 
{
    books = ['java', 'j2ee', 'spring'];
}
