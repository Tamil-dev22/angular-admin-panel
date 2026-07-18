import { Component } from '@angular/core';
// import { Learning } from '../../cheatsheet/pipe/learning/learning';
import { LearningService } from '../../cheatsheet/services/learning-service/learning-service';
import { LearningRxjs } from '../../cheatsheet/rxjs/learning-rxjs/learning-rxjs';
import { LearningSubject } from '../../cheatsheet/rxjs/learning-subject/learning-subject';

@Component({
  selector: 'app-dashboard',
  imports: [LearningService, LearningRxjs,LearningSubject],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
