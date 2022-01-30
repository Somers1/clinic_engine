import {Component, Input, OnChanges} from '@angular/core';
import {Student} from "../../models/student.model";
import {ClinicService} from "../../services/clinic.service";
import {ServerDataSource} from "ng2-smart-table";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-student-assessments',
  templateUrl: './student-assessments.component.html',
  styleUrls: ['./student-assessments.component.scss']
})
export class StudentAssessmentsComponent implements OnChanges {
  @Input() student: Student

  source: ServerDataSource
  tableSettings = {
    actions: false,
    pager: {
      display: true,
      perPage: 10,
    },
    columns: {
      student: {
        title: 'Student',
        filter: true,
        valuePrepareFunction: (student: Student) => student.name
      },
      report_due: {
        title: 'Report Due',
        filter: true,
        width: '10%',
        valuePrepareFunction: (date: Date) => this.datePipe.transform(date, 'short')
      },
      year_grade: {
        title: 'Grade',
        width: '2%',
        filter: true,
      },
      beery: {
        title: 'Beery VMI (and percentile)',
        filter: true,
        type: 'html',
        valuePrepareFunction: (score: number) => this.getCellHtml(score)
      },
      bot: {
        title: 'BOT-2 (and percentile)',
        filter: true,
        type: 'html',
        valuePrepareFunction: (score: number) => this.getCellHtml(score)
      },
      mc_masters_score: {
        title: 'McMasters/LFA (handwriting)',
        filter: true,
        type: 'html',
        valuePrepareFunction: (score: number) => this.getWpmHtml(score)
      },
      self_reg_score: {
        title: 'Self-regulation',
        filter: true,
      },
      summary: {
        title: 'Brief Summary',
        filter: true,
      },
      completed_by: {
        title: 'Report Complete',
        filter: true,
      },
    },
  }

  constructor(private clinicService: ClinicService,
              private datePipe: DatePipe) {
  }

  ngOnChanges(): void {
    this.source = this.clinicService.getStudentAssessmentServerSource(this.student.id);
  }

  getCellHtml(cell: any) {
    return cell.includes('Well Below Average') ?
      `<div class="well-below-average full-cell"><span>${cell}</span></div>` :
      cell.includes('Below Average') ?
        `<div class="below-average full-cell"><span>${cell}</span></div>` :
        `<div class="average full-cell"><span>${cell}</span></div>`
  }

  getWpmHtml(cell: any) {
    return cell < 8 ?
      `<div class="well-below-average full-cell"><span>${cell} WPM</span></div>` :
      cell < 20 ?
        `<div class="below-average full-cell"><span>${cell} WPM</span></div>` :
        `<div class="average full-cell"><span>${cell} WPM</span></div>`
  }

}
