import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNoteTableComponent } from './student-note-table.component';

describe('StudentNoteTableComponent', () => {
  let component: StudentNoteTableComponent;
  let fixture: ComponentFixture<StudentNoteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentNoteTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNoteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
