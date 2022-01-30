import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assessment, scores} from "../../models/assessment.model";

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {
  @Input() assessment!: Assessment;
  @Output() assessmentChange = new EventEmitter<Assessment>();

  scores = scores
  constructor() {
  }

  ngOnInit(): void {
  }

}
