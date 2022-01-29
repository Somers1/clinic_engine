import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {NoteFormDialogComponent} from "../../forms/note-form-dialog/note-form.component";
import {ClinicService} from "../../services/clinic.service";
import {Note} from "../../models/note.model";
import {OkDialogComponent} from "../../../dialog/components/ok-dialog/ok-dialog.component";

@Component({
  selector: 'app-student-action-card',
  templateUrl: './student-action-card.component.html',
  styleUrls: ['./student-action-card.component.scss']
})
export class StudentActionCardComponent {
  @Input() studentId: string
  @Output() onNoteSave = new EventEmitter()

  constructor(private dialogService: NbDialogService,
              private clinicService: ClinicService) {
  }

  onEditInfo() {

  }

  onAddAssessment() {

  }

  onAddNote() {
    this.dialogService.open(NoteFormDialogComponent).onClose.subscribe(noteText => {
      if (!noteText) return
      const note: Note = new Note()
      note.note = noteText
      note.student = this.studentId
      this.clinicService.postNote(note)
        .subscribe({
          next: () => this.dialogService.open(OkDialogComponent,
            {context: {title: 'Success', body: 'Saved Successfully!'}})
            .onClose.subscribe(() => this.onNoteSave.emit()),
          error: () => this.dialogService.open(OkDialogComponent,
            {context: {title: 'Failed', body: 'Note save failed.'}}),
        })
    })
  }
}
