import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddSchoolComponent } from './components/add-school/add-school.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddAssessmentComponent } from './components/add-assessment/add-assessment.component';
import { SchoolFormComponent } from './forms/school-form/school-form.component';
import {FormsModule} from "@angular/forms";
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbInputModule,
  NbSelectModule,
  NbTabsetModule
} from "@nebular/theme";
import {DialogModule} from "../dialog/dialog.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import { StudentFormComponent } from './forms/student-form/student-form.component';
import { SchoolDashboardComponent } from './components/school-dashboard/school-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentInfoCardComponent } from './components/student-info-card/student-info-card.component';
import { StudentNoteTableComponent } from './components/student-note-table/student-note-table.component';
import { StudentActionCardComponent } from './components/student-action-card/student-action-card.component';
import { NoteFormDialogComponent } from './forms/note-form-dialog/note-form.component';
import { EditStudentInfoDialogComponent } from './components/edit-student-info-dialog/edit-student-info-dialog.component';
import { AssessmentFormComponent } from './forms/assessment-form/assessment-form.component';
import { AddAssessmentDialogComponent } from './components/add-assessment-dialog/add-assessment-dialog.component';
import { StudentAssessmentsComponent } from './components/student-assessments/student-assessments.component';
import { StudentAssessmentTileComponent } from './components/student-assessment-tile/student-assessment-tile.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddSchoolComponent,
    AddStudentComponent,
    AddAssessmentComponent,
    SchoolFormComponent,
    StudentFormComponent,
    SchoolDashboardComponent,
    StudentDashboardComponent,
    StudentInfoCardComponent,
    StudentNoteTableComponent,
    StudentActionCardComponent,
    NoteFormDialogComponent,
    EditStudentInfoDialogComponent,
    AssessmentFormComponent,
    AddAssessmentDialogComponent,
    StudentAssessmentsComponent,
    StudentAssessmentTileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    DialogModule,
    Ng2SmartTableModule,
    NbDatepickerModule.forRoot(),
    NbTabsetModule
  ]
})
export class ClinicModule { }
