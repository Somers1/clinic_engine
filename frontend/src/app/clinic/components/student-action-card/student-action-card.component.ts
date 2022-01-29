import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-action-card',
  templateUrl: './student-action-card.component.html',
  styleUrls: ['./student-action-card.component.scss']
})
export class StudentActionCardComponent implements OnInit {
  @Input() studentId:string
  constructor() { }

  ngOnInit(): void {
  }

}
