import { Component } from '@angular/core';
import { Learning } from '../../cheatsheet/pipe/learning/learning';
import { LearningService } from '../../cheatsheet/services/learning-service/learning-service';

@Component({
  selector: 'app-dashboard',
  imports: [Learning,LearningService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
