import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {gender_types, Student} from "../../models/student.model";
import {School} from "../../models/school.model";
import {ClinicService} from "../../services/clinic.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @Input() student!: Student;
  @Output() studentChange = new EventEmitter<Student>();

  genderTypes = gender_types
  schools: School[]

  constructor(private clinicService: ClinicService) {
  }

  ngOnInit(): void {
    this.clinicService.getSchools().subscribe({
      next: res => this.schools = res,
      error: res => console.log(res),
    })
  }
}
