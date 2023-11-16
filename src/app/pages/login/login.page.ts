import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup | undefined
  public errMsg = ''

  constructor(public formBuilder:FormBuilder, private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get errorControl () {
    return this.loginForm?.controls
  }

  async signIn() {
    if(this.loginForm?.valid) {
      const user = await this.authService.loginUser(this.loginForm.value.username, this.loginForm.value.password)
      if (user) {
        this.router.navigate(['/tabs/home'])
      } else {
        this.errMsg = 'Account does not exist.';
      }
    }
  }

}
