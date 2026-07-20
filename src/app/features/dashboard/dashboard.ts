import { Component } from '@angular/core';
import { LearningTemplateForms } from '../../cheatsheet/forms/learning-template-forms/learning-template-forms';
// import { Learning } from '../../cheatsheet/pipe/learning/learning';
// import { LearningService } from '../../cheatsheet/services/learning-service/learning-service';
// import { LearningRxjs } from '../../cheatsheet/rxjs/learning-rxjs/learning-rxjs';
// import { LearningSubject } from '../../cheatsheet/rxjs/learning-subject/learning-subject';

@Component({
  selector: 'app-dashboard',
  imports: [LearningTemplateForms],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
