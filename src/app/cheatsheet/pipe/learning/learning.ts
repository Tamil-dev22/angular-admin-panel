import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { of } from 'rxjs';
import { CapitalizePipe } from '../capitalize-pipe';
import { FilterPipe } from '../filter-pipe';

@Component({
  selector: 'app-learning',
  imports: [UpperCasePipe,LowerCasePipe, TitleCasePipe,DatePipe,CurrencyPipe,PercentPipe,DecimalPipe,SlicePipe,JsonPipe,AsyncPipe,CommonModule,CapitalizePipe,FilterPipe],
  templateUrl: './learning.html',
  styleUrl: './learning.scss',
})
export class Learning {
  today = new Date();
  price = 1234.56789;
  employee = {
  id:1,
  name:'John',
  salary:50000
};
private http =inject(HttpClient);

name$ = of('Tamilarasan');
users$ = this.http.get('https://jsonplaceholder.typicode.com/users');
users = [
  { id:1, name:'John' },
  { id:2, name:'David' }
];
name = "Angular"
  count = 0;

  increment() {
    this.count++;
  }

  changeName() {
    this.name = 'react';
  }
}
