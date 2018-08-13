import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'book22',
  template: `
            <button (click) = "onClickEvent($event)">Button</button>
            `
})
export class Book22Component 
{
    @Output("sendBackToParent") returnGift = new EventEmitter;
    onClickEvent($event)
    {
        this.returnGift.emit("somthing form child");
        console.log("I am from Book22 onclickevent");
    }
}
