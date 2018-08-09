import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  public color = "blue";
  public colors = ["red", "green", "blue", "yellow", "gray"];
  public pipe = "Pipe Introduction";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }
public date = new Date();

  //@Input() public parentData;
  @Input('parentData') public title;

  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    this.childEvent.emit('Hey Its Child event');
  }
}
