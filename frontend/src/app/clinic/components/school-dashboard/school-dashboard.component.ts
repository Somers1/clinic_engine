import {Component, OnInit} from '@angular/core';
import {ServerDataSource} from "ng2-smart-table";
import {ClinicService} from "../../services/clinic.service";
import {Student} from "../../models/student.model";

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
      school: {
        title: 'School',
        filter: false,
      }
    },
  }
  source: ServerDataSource

  constructor(private clinicService: ClinicService) {
  }

  ngOnInit(): void {
    this.source = this.clinicService.getStudentServerSource();
  }

  onRowSelect(event: any) {
    console.log(<Student>event.data)
  }
}
