import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {gender_types, Student} from "../../models/student.model";
import {School} from "../../models/school.model";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @Input() schools: School[];
  @Input() student!: Student;
  @Output() studentChange = new EventEmitter<Student>();

  genderTypes = gender_types

  constructor() {
  }

  ngOnInit(): void {
  }

}
