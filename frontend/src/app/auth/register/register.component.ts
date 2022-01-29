import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthService} from "../auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User, UserRegister} from "../models/user.model";
import {NbDialogService} from "@nebular/theme";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  user: UserRegister = new UserRegister()
  error: boolean
  returnUrl: string;

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.returnUrl = params['returnUrl'])
  }

  register(dialog: TemplateRef<any>) {
    const userData: User = {
      email: this.user.email,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      phone: this.user.phone,
      password: this.user.password1,
    }
    this.authService.register(userData).subscribe({
      next: res => {
        this.dialogService.open(dialog, {context: {body: 'Registration Successful!', title: 'Success'}})
          .onClose.subscribe({
          next: () => this.router.navigate(['auth/login', {returnUrl: this.returnUrl}])
        })
      },
      error: res => {
        console.log(res)
        let errorMsg: string = res.status === 400 && res.error.email ? 'User with this email already exists.' : 'Server error.'
        this.dialogService.open(dialog, {context: {body: errorMsg, title: 'Error'}})
      },
    })
  }

}
