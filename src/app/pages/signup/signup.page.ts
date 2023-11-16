import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup | undefined

  constructor(public formBuilder:FormBuilder, private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        role: ['', [Validators.required]]
      },
      {
        validators: this.matchValidator.bind(this)
      }
    )
  }

  matchValidator(formGroup: FormGroup) {
    const password = formGroup.value.password;
    const confirmPassword = formGroup.value.confirmPassword
    return password === confirmPassword ? null : { passwordNotMatch: true }
  }

  get errorControl () {
    return this.signupForm?.controls;
  }

  async signUp() {
    if(this.signupForm?.valid) {
      const user = await this.authService.signupUser(
        {
          username: this.signupForm.value.username,
          password: this.signupForm.value.password,
          confirmPassword: this.signupForm.value.confirmPassword,
          role: this.signupForm.value.role,
      })

      if (user) {
        this.router.navigate(['/tabs/home'])
      }
    }
  }

}
