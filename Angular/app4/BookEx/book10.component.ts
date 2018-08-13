import { Component } from '@angular/core';


@Component({
  selector: 'book10',
  template: `
                <button (click) = "onSave($event)">Save</button>
            `
})
export class Book10Component 
{
    onSave($event)
    {
        console.log("save button clicked : ", $event);
    }
}
