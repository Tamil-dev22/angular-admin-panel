import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-learning-service',
  imports: [],
  templateUrl: './learning-service.html',
  styleUrl: './learning-service.scss',
})
export class LearningService implements OnInit {
  employees:any[]=[]
  private employeeService = inject(EmployeeService)

  ngOnInit():void{
  this.employees =  this.employeeService.getEmployees()
  }
}
