import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentInfoDialogComponent } from './edit-student-info-dialog.component';

describe('EditStudentInfoDialogComponent', () => {
  let component: EditStudentInfoDialogComponent;
  let fixture: ComponentFixture<EditStudentInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudentInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
