import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningService } from './learning-service';

describe('LearningService', () => {
  let component: LearningService;
  let fixture: ComponentFixture<LearningService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningService],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
