import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningRxjs } from './learning-rxjs';

describe('LearningRxjs', () => {
  let component: LearningRxjs;
  let fixture: ComponentFixture<LearningRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningRxjs],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningRxjs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
