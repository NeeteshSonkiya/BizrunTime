import { Component } from '@angular/core';


@Component({
  selector: 'book14',
  template: `
            <div (click) = "onClickDiv()">
            <button (event) = "onButtonClick($event)">Save</button>
            </div>
            `
})
export class Book14Component 
{
    onClickDiv()
    {
        console.log("div is clicked ");
    }
    onButtonClick($event)
    {
        $event.stopPropagation();
        console.log("button is clicked ");
    }
}
