import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {NoteFormDialogComponent} from "../../forms/note-form-dialog/note-form.component";
import {ClinicService} from "../../services/clinic.service";
import {Note} from "../../models/note.model";
import {OkDialogComponent} from "../../../dialog/components/ok-dialog/ok-dialog.component";
import {EditStudentInfoDialogComponent} from "../edit-student-info-dialog/edit-student-info-dialog.component";
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-student-action-card',
  templateUrl: './student-action-card.component.html',
  styleUrls: ['./student-action-card.component.scss']
})
export class StudentActionCardComponent{
  @Input() student!: Student;
  @Output() studentChange = new EventEmitter<Student>();

  constructor(private dialogService: NbDialogService,
              private clinicService: ClinicService) {
  }
  onEditInfo() {
    this.dialogService.open(EditStudentInfoDialogComponent, {context:{student: {...this.student}}})
      .onClose.subscribe(student => {
      if (!student) return
      this.clinicService.patchStudent(student)
        .subscribe({
          next: res => {
            this.studentChange.emit(res)
            this.dialogService.open(OkDialogComponent,
              {context: {title: 'Success', body: 'Saved Successfully!'}})
          },
          error: () => this.dialogService.open(OkDialogComponent,
            {context: {title: 'Failed', body: 'Note save failed.'}}),
        })
    })
  }

  onAddAssessment() {

  }

  onAddNote() {
    this.dialogService.open(NoteFormDialogComponent).onClose.subscribe(noteText => {
      if (!noteText) return
      const note: Note = new Note()
      note.note = noteText
      note.student = this.student.id
      this.clinicService.postNote(note)
        .subscribe({
          next: () => this.dialogService.open(OkDialogComponent,
            {context: {title: 'Success', body: 'Saved Successfully!'}}),
          error: () => this.dialogService.open(OkDialogComponent,
            {context: {title: 'Failed', body: 'Note save failed.'}}),
        })
    })
  }
}
