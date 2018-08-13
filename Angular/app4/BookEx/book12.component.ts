import { Component } from '@angular/core';


@Component({
  selector: 'book12',
  template: `
            <input (keyup.enter) = "onSave()"/>
            `
})
export class Book12Component 
{
    onSave()
    {
        console.log("save button clicked ");
    }
}
