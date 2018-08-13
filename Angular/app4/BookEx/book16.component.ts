import { Component } from '@angular/core';

@Component({
  selector: 'book16',
  template: `
            <input #param1 (keyup.enter) = "onKeyupEvent(param1.value)"/>
            `
})
export class Book16Component 
{
    onKeyupEvent(myValue)
    {
        console.log(myValue);
    }
}
