import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      phoneNumber: 8770123421,
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      phoneNumber: 8770123421,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'Neetesh',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'neetesh786976@gmail.com',
      phoneNumber: 8770345187,
      dateOfBirth: new Date('11/04/1995'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/john.jpg'
    },
    {
      id: 4,
      name: 'Oliver',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      phoneNumber: 8770123421,
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 5,
      name: 'Ansh',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'ansh786976@gmail.com',
      phoneNumber: 8519082012,
      dateOfBirth: new Date('10/04/1995'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/john.png'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
