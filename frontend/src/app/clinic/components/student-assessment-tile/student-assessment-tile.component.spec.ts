import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssessmentTileComponent } from './student-assessment-tile.component';

describe('StudentAssessmentTileComponent', () => {
  let component: StudentAssessmentTileComponent;
  let fixture: ComponentFixture<StudentAssessmentTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAssessmentTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAssessmentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
