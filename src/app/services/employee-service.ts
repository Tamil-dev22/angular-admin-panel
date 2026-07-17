import { Injectable } from '@angular/core';
import { EmployeeList } from '../core/models/employee';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  employees: EmployeeList[] = [
    {
      id:1,
      name:'John',
      department:'IT',
      salary:50000,
      status:'Active'
    },
    {
      id:2,
      name:'David',
      department:'HR',
      salary:35000,
      status:'Inactive'
    },
    {
      id:3,
      name:'Peter',
      department:'IT',
      salary:70000,
      status:'Active'
    },
    {
      id:4,
      name:'Sam',
      department:'Finance',
      salary:45000,
      status:'Pending'
    },
    {
      id:5,
      name:'Mary',
      department:'IT',
      salary:65000,
      status:'Active'
    }
  ];

  getEmployees() {
    return of([])
  }

}
