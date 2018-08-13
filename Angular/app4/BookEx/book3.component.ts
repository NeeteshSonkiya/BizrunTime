import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'book3',
  template: `
                <ul>
                    <li *ngFor=" let book of books ">
                        {{ book }}
                    </li>
                </ul>
            `
})
export class Book3Component 
{
    books;

    constructor(bookService : BookService)
    {
        this.books = bookService.getBooks();
    }
}
