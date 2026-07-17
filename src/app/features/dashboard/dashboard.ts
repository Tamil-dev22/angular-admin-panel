import { Component } from '@angular/core';
import { Learning } from '../../cheatsheet/pipe/learning/learning';

@Component({
  selector: 'app-dashboard',
  imports: [Learning],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
