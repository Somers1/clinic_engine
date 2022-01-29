import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../clinic/components/dashboard/dashboard.component";
import {PagesComponent} from "./pages.component";
import {AddSchoolComponent} from "../clinic/components/add-school/add-school.component";
import {AddAssessmentComponent} from "../clinic/components/add-assessment/add-assessment.component";
import {AddStudentComponent} from "../clinic/components/add-student/add-student.component";
import {SchoolDashboardComponent} from "../clinic/components/school-dashboard/school-dashboard.component";
import {StudentDashboardComponent} from "../clinic/components/student-dashboard/student-dashboard.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'add-school',
      component: AddSchoolComponent,
    },
    {
      path: 'add-student',
      component: AddStudentComponent,
    },
    {
      path: 'add-assessment',
      component: AddAssessmentComponent,
    },
    {
      path: 'school-dashboard/:schoolId',
      component: SchoolDashboardComponent,
    },
    {
      path: 'student-dashboard/:studentId',
      component: StudentDashboardComponent,
    },
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: 'dashboard'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
