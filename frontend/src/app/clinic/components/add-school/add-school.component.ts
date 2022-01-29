import {Component, OnInit} from '@angular/core';
import {School} from "../../models/school.model";
import {NbDialogService} from "@nebular/theme";
import {OkDialogComponent} from "../../../dialog/components/ok-dialog/ok-dialog.component";
import {Router} from "@angular/router";
import {ClinicService} from "../../services/clinic.service";

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {
  school: School = new School()

  constructor(private clinicService: ClinicService,
              private dialogService: NbDialogService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.clinicService.postSchool(this.school).subscribe({
      next: res => this.dialogService.open(OkDialogComponent, {
        context: {body: 'School Added!', title: 'Success'}
      }).onClose.subscribe({
        next: () => this.router.navigate(['pages/dashboard'])
      }),
      error: res => this.dialogService.open(OkDialogComponent, {
        context: {body: 'Failed to add school. Ensure all required fields are filled.', title: 'Failed'}
      }),
    })
  }
}
