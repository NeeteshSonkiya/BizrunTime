import { Component } from '@angular/core';
import {BookService } from './book.service';

@Component({
  selector: 'book13',
  template: `
            <div (click) = "onClickDiv()">
            <button (click) = "onButtonClick()">Save</button>
            </div>
            `
})
export class Book13Component 
{
    onClickDiv()
    {
        console.log("div is clicked ");
    }
    onButtonClick()
    {
        console.log("button is clicked ");
    }
}
