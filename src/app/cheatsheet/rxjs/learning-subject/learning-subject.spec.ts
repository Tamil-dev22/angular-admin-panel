import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningSubject } from './learning-subject';

describe('LearningSubject', () => {
  let component: LearningSubject;
  let fixture: ComponentFixture<LearningSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningSubject],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningSubject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
