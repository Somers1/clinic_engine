import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent {
  error: boolean
  loginForm: FormGroup;
  returnUrl: string;

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    if (!this.returnUrl) this.route.params.subscribe(params => this.returnUrl = params['returnUrl'])
    console.log(this.returnUrl)
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: data => {
        localStorage.setItem('token', data['token'])
        if (this.returnUrl) this.router.navigate([this.returnUrl]).catch()
        else this.router.navigate(['pages/home']).catch()
      },
      error: error => {
        console.log(error)
        this.error = true
      },
    })
  }

  onRegister() {
    this.router.navigate(['auth/register', {returnUrl: this.returnUrl}]).catch()
  }
}
