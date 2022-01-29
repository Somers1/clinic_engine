import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {NbCardModule} from "@nebular/theme";



@NgModule({
  declarations: [
    PaginatorComponent
  ],
  exports: [
    PaginatorComponent
  ],
    imports: [
        CommonModule,
        NbCardModule
    ]
})
export class PaginatorModule { }
