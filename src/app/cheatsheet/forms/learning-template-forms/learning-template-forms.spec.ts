import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningTemplateForms } from './learning-template-forms';

describe('LearningTemplateForms', () => {
  let component: LearningTemplateForms;
  let fixture: ComponentFixture<LearningTemplateForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningTemplateForms],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningTemplateForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
