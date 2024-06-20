import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  userForm!: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(public service: UserService, private router: Router) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(14),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(14),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.userForm.valid) {
      this.service.login(
        this.userForm.value.email,
        this.userForm.value.password,
      );
      this.userForm.reset();
      this.isFormSubmitted = false;
    }
  }
}
