import {Component, OnInit} from '@angular/core';
import {School} from "../../models/school.model";

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {
  school: School = new School()

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.school)
  }
}
