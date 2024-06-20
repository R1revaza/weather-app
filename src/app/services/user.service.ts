import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  signUp(email: any, password: any) {
    throw new Error('Method not implemented.');
  }
  user: any = null;
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private fireStore: AngularFirestore
  ) {
    this.fireAuth.authState.subscribe((user) => {
      this.user = user;
      if (this.user && this.user.uid) {
        this.router.navigate(['/dashboard']);
      } 
    });
  }

  async signIn(email: string, password: string) {
      await this.fireAuth.signInWithEmailAndPassword(email, password);
      this.user = this.fireAuth.currentUser;
      if (this.user) {
        this.router.navigate(['/dashboard']);
      }
  }

  async login(email: string, password: string) {
      this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
        this.user = this.fireAuth.currentUser;
        if (this.user) {
          this.router.navigate(['/dashboard']);
        }
      }).catch((err) => {
        if(err.code == "auth/email-already-in-use"){
          alert("This email is already in use")
        }
      });

    }

  isLogged(): boolean {
    return this.user !== null;
  }

  async logout() {
    this.user = null;
    await this.fireAuth.signOut();
    this.router.navigate(['/login']);
  }
}
