import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private _router: Router
    ) {
    this.loginForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup(): FormGroup {
    return this.fb.group( {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)]],
    })
  }
  login() {
    this._router.navigate(['to-do']);
  }
}
