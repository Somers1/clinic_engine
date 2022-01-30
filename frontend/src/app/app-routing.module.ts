import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth-guard.service";

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {path: '**', redirectTo: 'pages'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
