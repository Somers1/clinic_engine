import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  loggedIn: boolean
  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isAuthenticated()
  }

  onLogout() {
    this.authService.logout()
    this.loggedIn = false
  }

  onLogin() {
    this.router.navigate(['auth/login']).catch()
  }

  navTo(page: string) {
    this.router.navigate([`pages/${page}`]).catch()
  }
}
