import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'book2',
  template: `
                <ul>
                    <li *ngFor=" let book of books ">
                        {{ book }}
                    </li>
                </ul>
            `
})
export class Book2Component 
{
    books;

    constructor()
    {
        let bookService = new BookService();
        this.books = bookService.getBooks();
    }
}
