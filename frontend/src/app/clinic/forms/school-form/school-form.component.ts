import {Component, Input, OnInit} from '@angular/core';
import {School} from "../../models/school.model";

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss']
})
export class SchoolFormComponent implements OnInit {
  @Input() school: School

  constructor() {
  }

  ngOnInit(): void {
  }

}
