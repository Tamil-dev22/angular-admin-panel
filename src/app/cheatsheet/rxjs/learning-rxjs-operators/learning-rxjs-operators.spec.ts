import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningRxjsOperators } from './learning-rxjs-operators';

describe('LearningRxjsOperators', () => {
  let component: LearningRxjsOperators;
  let fixture: ComponentFixture<LearningRxjsOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningRxjsOperators],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningRxjsOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
