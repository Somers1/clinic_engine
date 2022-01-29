import {Component, OnInit} from '@angular/core';
import {ClinicService} from "../../services/clinic.service";
import {ActivatedRoute} from "@angular/router";
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  student: Student

  constructor(private clinicService: ClinicService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clinicService.getStudent(params['studentId']).subscribe(res => this.student = res)
    })
  }
}
