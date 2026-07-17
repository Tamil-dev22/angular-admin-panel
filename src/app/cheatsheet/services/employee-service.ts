import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
    employees = [

    {
      id:1,
      name:'Tamil',
      department:'IT',
      salary:50000
    },

    {
      id:2,
      name:'John',
      department:'HR',
      salary:40000
    },

    {
      id:3,
      name:'David',
      department:'Finance',
      salary:60000
    }
  ];

  getEmployees(){
    return this.employees || [];
  }
}
