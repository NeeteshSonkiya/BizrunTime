import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {

 
  form :FormGroup = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
  })

  constructor() {

  }
}
