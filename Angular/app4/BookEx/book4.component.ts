import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'book4',
  template: `
                <button (click) = "onSave()">Save</button>
            `
})
export class Book4Component 
{
    onSave()
    {
        console.log("button is clicked");
    }
}
