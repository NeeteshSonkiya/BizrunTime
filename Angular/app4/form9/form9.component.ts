import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form9',
  templateUrl: './form9.component.html',
  styleUrls: ['./form9.component.css']
})
export class Form9Component implements OnInit {

  form : FormGroup = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit() {
  }

}