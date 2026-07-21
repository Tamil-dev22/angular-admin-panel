import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningReactiveForms } from './learning-reactive-forms';

describe('LearningReactiveForms', () => {
  let component: LearningReactiveForms;
  let fixture: ComponentFixture<LearningReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningReactiveForms],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningReactiveForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
