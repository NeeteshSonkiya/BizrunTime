import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form6',
  templateUrl: './form6.component.html',
  styleUrls: ['./form6.component.css']
})
export class Form6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  genders = [{id: 1, name: 'Male'}, {id: 2, name: 'FeMale'}];
  skills = [{id:1, name:'C'}, {id:2, name:'CPP'}, {id:3, name:'JAVA'}];
  educations = [{id: 1, name: 'BE'}, {id: 2, name: 'ME'}];

}
