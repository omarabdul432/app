import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router, private firestore: Firestore) { }

  ngOnInit() {
    addDoc(collection(this.firestore, 'users'), {
      email: this.loginForm.value,
      password: this.loginForm.value
    })
    console.log('users1', addDoc)
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  submit() {
    const email: any = this.loginForm.value.email
    const password: any = this.loginForm.value.password

    if (!this.loginForm.valid) {
      return
    }

    this.auth.login(email, password).subscribe(() => {
      this.router.navigateByUrl('/')
      localStorage.setItem('user', JSON.stringify(this.loginForm.value))
      // console.log(this.loginForm.value)
    })
  }

  signinwithGoogle() {
    this.auth.signinwithgoogle().subscribe(() => {
      this.router.navigateByUrl('/')
    })
  }

  passwordReset() {
    const email = this.loginForm.value.email
    if (!email) {
      alert('Email must be filled')
    } else {
      this.auth.passwordReset(email)
      alert('Reset password mail send')
    }
  }
}
