import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  forms!: FormGroup;
  inc: boolean = false;
  errorMessage: string = '';

  constructor(public userService: UserService, private router: Router, private auth: AngularFireAuth) {
    this.forms = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
    });
  }

  submit() {
    if (this.forms.valid) {
      this.userService.signIn(this.forms.value.email, this.forms.value.password)
        .then(() => {
          this.inc = false;
          this.errorMessage = '';
          this.router.navigate(['/home']);
        })
        .catch(() => {
          this.inc = true;
          this.errorMessage = 'Invalid email or password. Please try again.';
        });
    } else {
      this.inc = true; 
      this.errorMessage = 'Access to this account has been temporarily disabled due to many failed login attempts.';
    }
  }
}
