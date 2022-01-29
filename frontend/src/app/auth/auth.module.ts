import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import {NbAlertModule, NbButtonModule, NbCardModule, NbInputModule} from "@nebular/theme";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxAuthRoutingModule,
    NbAuthModule.forRoot(),
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbCardModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class AuthModule {
}
