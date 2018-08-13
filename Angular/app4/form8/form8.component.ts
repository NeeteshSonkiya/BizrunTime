import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form8',
  templateUrl: './form8.component.html',
  styleUrls: ['./form8.component.css']
})
export class Form8Component implements OnInit {

  form : FormGroup = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl()
  })

  constructor() { }

  ngOnInit() {
  }

}