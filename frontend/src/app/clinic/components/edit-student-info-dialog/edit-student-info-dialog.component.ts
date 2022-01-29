import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {NoteFormDialogComponent} from "../../forms/note-form-dialog/note-form.component";
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-edit-student-info-dialog',
  templateUrl: './edit-student-info-dialog.component.html',
  styleUrls: ['./edit-student-info-dialog.component.scss']
})
export class EditStudentInfoDialogComponent implements OnInit {

  @Input() student:Student

  constructor(protected ref: NbDialogRef<NoteFormDialogComponent>) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.ref.close(this.student)
  }

  cancel() {
    this.ref.close()
  }
}
