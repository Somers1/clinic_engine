import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddSchoolComponent } from './components/add-school/add-school.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddAssessmentComponent } from './components/add-assessment/add-assessment.component';
import { SchoolFormComponent } from './forms/school-form/school-form.component';
import {FormsModule} from "@angular/forms";
import {NbButtonModule, NbCardModule, NbInputModule, NbSelectModule} from "@nebular/theme";
import {DialogModule} from "../dialog/dialog.module";
import {Ng2SmartTableModule} from "ng2-smart-table";



@NgModule({
  declarations: [
    DashboardComponent,
    AddSchoolComponent,
    AddStudentComponent,
    AddAssessmentComponent,
    SchoolFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    DialogModule,
    Ng2SmartTableModule
  ]
})
export class ClinicModule { }
