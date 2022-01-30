import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {Assessment} from "../../models/assessment.model";

@Component({
  selector: 'app-add-assessment-dialog',
  templateUrl: './add-assessment-dialog.component.html',
  styleUrls: ['./add-assessment-dialog.component.scss']
})
export class AddAssessmentDialogComponent implements OnInit {
    @Input() assessment:Assessment

  constructor(protected ref: NbDialogRef<AddAssessmentDialogComponent>) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.ref.close(this.assessment)
  }

  cancel() {
    this.ref.close()
  }
}
