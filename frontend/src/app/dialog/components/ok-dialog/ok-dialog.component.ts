import {Component, Input} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-ok-dialog',
  templateUrl: './ok-dialog.component.html',
  styleUrls: ['./ok-dialog.component.scss']
})
export class OkDialogComponent {
  @Input() title:string
  @Input() body:string
  constructor(protected ref: NbDialogRef<OkDialogComponent>) { }

  onOk(){
    this.ref.close()
  }

}
