import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<h1>Hello to all {{title}}</h1>',
})
export class TestComponent {

    title = 'my first app';
}
