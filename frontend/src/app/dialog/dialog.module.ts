import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OkDialogComponent} from './components/ok-dialog/ok-dialog.component';
import {NbButtonModule, NbCardModule, NbLayoutModule} from "@nebular/theme";


@NgModule({
  declarations: [
    OkDialogComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbButtonModule
  ]
})
export class DialogModule {
}
