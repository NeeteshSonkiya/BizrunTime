import { Component } from '@angular/core';

@Component({
  selector: 'book17',
  template: `
            <input [(ngModel)] = "param1" (keyup.enter) = "onKeyupEvent()"/>    
            `       //[(ngModel)] is used for to way binding,component value to the binding with property
})
export class Book17Component 
{
    param1 = "test value";

    onKeyupEvent()
    {
        console.log(this.param1);
    }
}
