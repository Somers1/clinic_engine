import {Component, OnInit} from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {Router} from "@angular/router";
import {OkDialogComponent} from "../../../dialog/components/ok-dialog/ok-dialog.component";
import {Student} from "../../models/student.model";
import {ClinicService} from "../../services/clinic.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student()

  constructor(private clinicService: ClinicService,
              private dialogService: NbDialogService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.clinicService.getSchools().subscribe({
      next: res => console.log(res),
      error: res => console.log(res),
    })
  }

  onSubmit() {
    this.clinicService.postStudent(this.student).subscribe({
      next: res => this.dialogService.open(OkDialogComponent, {
        context: {body: 'Student Added!', title: 'Success'}
      }).onClose.subscribe({
        next: () => this.router.navigate(['pages/dashboard'])
      }),
      error: res => this.dialogService.open(OkDialogComponent, {
        context: {body: 'Failed to add student. Ensure all required fields are filled.', title: 'Failed'}
      }),
    })
  }

}
