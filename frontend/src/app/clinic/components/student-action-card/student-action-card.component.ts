import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {NoteFormDialogComponent} from "../../forms/note-form-dialog/note-form.component";
import {ClinicService} from "../../services/clinic.service";
import {Note} from "../../models/note.model";
import {OkDialogComponent} from "../../../dialog/components/ok-dialog/ok-dialog.component";
import {EditStudentInfoDialogComponent} from "../edit-student-info-dialog/edit-student-info-dialog.component";
import {Student} from "../../models/student.model";
import {AddAssessmentDialogComponent} from "../add-assessment-dialog/add-assessment-dialog.component";
import {Assessment} from "../../models/assessment.model";

@Component({
  selector: 'app-student-action-card',
  templateUrl: './student-action-card.component.html',
  styleUrls: ['./student-action-card.component.scss']
})
export class StudentActionCardComponent {
  @Input() student!: Student;
  @Output() studentChange = new EventEmitter<Student>();
  assessment: Assessment = new Assessment()

  constructor(private dialogService: NbDialogService,
              private clinicService: ClinicService) {
  }

  onEditInfo() {
    this.dialogService.open(EditStudentInfoDialogComponent, {context: {student: {...this.student}}})
      .onClose.subscribe(student => {
      if (!student) return
      this.clinicService.patchStudent(student)
        .subscribe({
          next: res => {
            this.studentChange.emit(res)
            this.onSuccess()
          },
          error: this.onError
        })
    })
  }

  onAddAssessment() {
    this.dialogService.open(AddAssessmentDialogComponent, {context: {assessment: this.assessment}})
      .onClose.subscribe(assessment => {
      if (!assessment) return
      assessment.student = this.student.id
      this.clinicService.postAssessment(assessment)
        .subscribe({
          next: () => this.onSuccess(),
          error: () =>  this.onError()
        })
    })
  }

  onAddNote() {
    this.dialogService.open(NoteFormDialogComponent).onClose.subscribe(noteText => {
      if (!noteText) return
      const note: Note = new Note()
      note.note = noteText
      note.student = this.student.id
      this.clinicService.postNote(note)
        .subscribe({
          next: () => this.onSuccess(),
          error: () => this.onError(),
        })
    })
  }

  onError() {
    this.dialogService.open(OkDialogComponent, {context: {title: 'Failed', body: 'Note save failed.'}})
  }

  onSuccess() {
    this.dialogService.open(OkDialogComponent, {context: {title: 'Success', body: 'Saved Successfully!'}})
  }
}
