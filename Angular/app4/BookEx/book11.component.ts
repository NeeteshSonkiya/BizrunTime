import { Component } from '@angular/core';

@Component({
  selector: 'book11',
  template: `
                <input (keyup) = "onkeyUp($event)"/>
            `
})
export class Book11Component 
{
    onkeyUp($event)
    {
        if($event.keyCode == 13)
        {
            console.log("submit the form");
        }
    }
}
