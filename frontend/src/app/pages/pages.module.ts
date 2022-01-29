import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from "./pages.component";
import {NbActionsModule, NbIconModule, NbLayoutModule, NbTooltipModule} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbLayoutModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbIconModule,
    NbTooltipModule
  ]
})
export class PagesModule {
}
