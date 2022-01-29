import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-note-form-dialog',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormDialogComponent implements OnInit {
  note:string
  constructor(protected ref: NbDialogRef<NoteFormDialogComponent>) { }

  ngOnInit(): void {
  }

  submit() {
    this.ref.close(this.note)
  }

  cancel() {
    this.ref.close()
  }
}
