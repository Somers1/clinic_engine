import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {School, school_types} from "../../models/school.model";

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss']
})
export class SchoolFormComponent implements OnInit {
  @Input() school!: School;
  @Output() schoolChange = new EventEmitter<School>();

  schoolTypes = school_types
  constructor() {
  }

  ngOnInit(): void {
  }

}
