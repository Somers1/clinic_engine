import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {NbDialogService} from "@nebular/theme";
import {Router} from "@angular/router";
import {OkDialogComponent} from "../../../dialog/components/ok-dialog/ok-dialog.component";
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student()

  constructor(private studentService: StudentService,
              private dialogService: NbDialogService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.studentService.postStudent(this.student).subscribe({
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
