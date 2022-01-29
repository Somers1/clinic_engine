import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-student-info-card',
  templateUrl: './student-info-card.component.html',
  styleUrls: ['./student-info-card.component.scss']
})
export class StudentInfoCardComponent implements OnInit {
  @Input() student:Student

  constructor() { }

  ngOnInit(): void {
  }

}
