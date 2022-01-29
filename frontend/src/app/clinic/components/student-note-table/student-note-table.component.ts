import {Component, Input, OnChanges} from '@angular/core';
import {ServerDataSource} from "ng2-smart-table";
import {ClinicService} from "../../services/clinic.service";

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
  constructor(private clinicService: ClinicService) { }

  ngOnChanges(): void {
    this.source = this.clinicService.getStudentNoteServerSource(this.studentId);
  }

}
