import { Component } from '@angular/core';


@Component({
  selector: 'book15',
  template: `
            <input (keyup) = "onKeyupEvent($event)"/>
            `
})
export class Book15Component 
{
    onKeyupEvent($event)
    {
        if ($event.keyCode == 13)
        {
            console.log("value : " + $event.target.value);
        }
    }
}
