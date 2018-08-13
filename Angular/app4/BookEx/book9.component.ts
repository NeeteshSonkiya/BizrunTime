import { Component } from '@angular/core';


@Component({
  selector: 'book9',
  template: `
                <button (click) = "onSave()">Save</button>
            `
})
export class Book9Component 
{
    onSave()
    {
        console.log("save button clicked");
        
    }
}
