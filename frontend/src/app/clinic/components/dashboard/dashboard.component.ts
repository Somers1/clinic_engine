import { Component, OnInit } from '@angular/core';
import {ServerDataSource} from "ng2-smart-table";
import {School} from "../../models/school.model";
import {ClinicService} from "../../services/clinic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tableSettings = {
    actions: false,
  pager: {
    display: true,
    perPage: 13,
  },
  columns: {
    name: {
      title: 'School Name',
      filter: true,
    },
    address: {
      title: 'Address',
      filter: true,
    },
    contact_name: {
      title: 'Contact Name',
      filter: true,
    },
    contact_email: {
      title: 'Contact Email',
      filter: true,
    },
    contact_phone: {
      title: 'Contain Phone',
      filter: true,
    },
  },
  }
  source: ServerDataSource
  constructor(private clinicService:ClinicService,
              private router:Router) { }

  ngOnInit(): void {
    this.source = this.clinicService.getSchoolServerSource();
  }

  onRowSelect(event: any) {
    const selectedSchool = <School>event.data
    this.router.navigate([`pages/school-dashboard/${selectedSchool.id}`]).catch()
  }
}
