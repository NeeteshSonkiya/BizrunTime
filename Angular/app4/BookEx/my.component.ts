import { Component } from '@angular/core';

@Component({
  selector: 'mytag',
  template: `

  '<h1>Hello to all, {{ title }}  <br>
  Again{{ getTitle() }}
  </h1>'

  `,
  styles: ['h1{color:blue}']
})
export class MyComponent 
{

    title = 'my first app ';
    getTitle()
    {
        return this.title;
    }
}
