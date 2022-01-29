import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddSchoolComponent } from './components/add-school/add-school.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddAssessmentComponent } from './components/add-assessment/add-assessment.component';
import { SchoolFormComponent } from './forms/school-form/school-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddSchoolComponent,
    AddStudentComponent,
    AddAssessmentComponent,
    SchoolFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClinicModule { }
