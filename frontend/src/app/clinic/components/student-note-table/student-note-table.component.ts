import {Component, Input, OnChanges} from '@angular/core';
import {ServerDataSource} from "ng2-smart-table";
import {ClinicService} from "../../services/clinic.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-student-note-table',
  templateUrl: './student-note-table.component.html',
  styleUrls: ['./student-note-table.component.scss']
})
export class StudentNoteTableComponent implements OnChanges {
  @Input() studentId:string
  source: ServerDataSource
  tableSettings = {
    actions: false,
    pager: {
      display: true,
      perPage: 10,
    },
    columns: {
      note_date: {
        title: 'Date of Note',
        filter: true,
        valuePrepareFunction: (note_date:Date) => this.datePipe.transform(note_date, 'short')
      },
      note: {
        title: 'Note',
        filter: true,
      },
      note_taker: {
        title: 'Note Taker',
        filter: true,
      }
    },
  }
  constructor(private clinicService: ClinicService,
              private datePipe:DatePipe) { }

  ngOnChanges(): void {
    this.source = this.clinicService.getStudentNoteServerSource(this.studentId);
  }

}
