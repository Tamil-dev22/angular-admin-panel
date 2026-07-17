import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EmployeeList } from '../core/models/employee';
import { EmployeeService } from '../services/employee-service';
import { AsyncSubject, BehaviorSubject, concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, map, mergeMap, Observable, of, ReplaySubject, shareReplay, Subject, switchMap, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee implements OnInit,OnDestroy {

   employees: EmployeeList[] = [
    { id: 1, name: 'John', department: 'IT', salary: 50000, status: 'Active' },
    { id: 2, name: 'David', department: 'HR', salary: 35000, status: 'Inactive' },
    { id: 3, name: 'Peter', department: 'IT', salary: 70000, status: 'Active' },
    { id: 4, name: 'Sam', department: 'Finance', salary: 45000, status: 'Pending' },
    { id: 5, name: 'Mary', department: 'IT', salary: 65000, status: 'Active' }
  ];
 searchSubject = new Subject<string>();

searchEmployee(search: string) {

  const result = this.employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return of(result)}


  destroy$ =  new Subject<void>();

  ngOnInit():void{
    this.searchSubject
      .pipe(
        debounceTime(500),
         distinctUntilChanged(),
        switchMap(value => this.searchEmployee(value))
      )
      .subscribe(data => {
        console.log(data);
      });
      const employees$ = this.searchEmployee('John').pipe(shareReplay(1));

employees$.subscribe();
employees$.subscribe();
  }
  onSearch(value: string) {
    this.searchSubject.next(value);
  }

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}

}
