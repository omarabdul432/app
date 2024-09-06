import { inject, Injectable, OnDestroy } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, user, User } from '@angular/fire/auth';
import { from, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnDestroy {

  private auth = inject(Auth)
  user$ = user(this.auth)
  userSubscription: Subscription

  constructor() {
    this.userSubscription = this.user$.subscribe((user: User) => {
      user?.displayName
      console.log('user', user)
    })
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }

  signup(username: string, email: string, password: string) {
    const promise = createUserWithEmailAndPassword(this.auth, email, password).then(res => {
      updateProfile(res.user, { displayName: username })
    })
    return from(promise)
  }

  signinwithgoogle() {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()).then((res) => {

    }).then(err => {
      console.log(err)
    }))
  }

  passwordReset(email: string) {
    return sendPasswordResetEmail(this.auth, email)
  }

  logout() {
    return signOut(this.auth)
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }
}
