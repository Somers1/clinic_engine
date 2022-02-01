import {Component, OnInit} from '@angular/core';
import {ServerDataSource} from "ng2-smart-table";
import {ClinicService} from "../../services/clinic.service";
import {Student} from "../../models/student.model";
import {School} from "../../models/school.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.scss']
})
export class SchoolDashboardComponent implements OnInit {
  tableSettings = {
    actions: false,
    pager: {
      display: true,
      perPage: 13,
    },
    columns: {
      name: {
        title: 'Student Name',
        filter: true,
      },
      diagnosis: {
        title: 'Diagnosis',
        filter: true,
      },
      clinician_name: {
        title: 'Clinician Name',
        filter: true,
      }
    },
  }
  source: ServerDataSource
  school: School

  constructor(private clinicService: ClinicService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {
        this.source = this.clinicService.getStudentServerSource(params['schoolId']);
        this.clinicService.getSchool(params['schoolId']).subscribe(res => this.school = res)
      }
    })
  }

  onRowSelect(event: any) {
    const selectedStudent = <Student>event.data
    this.router.navigate([`pages/student-dashboard/${selectedStudent.id}`]).catch()
  }
}
