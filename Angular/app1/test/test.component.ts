import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
  
})
export class TestComponent implements OnInit {

  public name = "Admin";
  public bname = "";

  public success = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-danger": this.hasError,
    "text-success": !this.hasError,
    "text-special": this.isSpecial
  }
  public highlightColor = "Yellow";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  constructor() { }

  public greeting = "";

  ngOnInit() {
  }

  greetUser() {
    return "Welcome to Angular World";
  }

  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value)
  {
      console.log(value);
  }
}
