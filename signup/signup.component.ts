import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private auth: AuthenticationService, private router: Router) { }

  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  submit() {
    const username: any = this.signupForm.value.username
    const email: any = this.signupForm.value.email
    const password: any = this.signupForm.value.password

    this.auth.signup(username, email, password).subscribe(() => {
      this.router.navigateByUrl('/signin')
    })
  }

}
