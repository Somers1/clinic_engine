import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentActionCardComponent } from './student-action-card.component';

describe('StudentActionCardComponent', () => {
  let component: StudentActionCardComponent;
  let fixture: ComponentFixture<StudentActionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentActionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
