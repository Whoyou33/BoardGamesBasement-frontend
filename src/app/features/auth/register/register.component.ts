import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatedPassword: ['', Validators.required],
      role: ['', Validators.required]
    });
  };

  onSubmit(): void {
    if(this.registerForm.valid) {
      const loginData = this.registerForm.value;

      console.log(loginData);
    }
  }
}
