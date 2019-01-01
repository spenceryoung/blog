import { Injectable } from "@angular/core";
import 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private afAuth: AngularFireAuth, private router: Router) {}
    
    isAuthenticated(): boolean {
        if(firebase.auth().currentUser) {
            return true;
        }
        else {
            return false;
        }
    }

    login(value): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(res => {
				resolve(res);
			}, err => {
                reject(err)}
            )
		})
    }
    
    logout(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			if (firebase.auth().currentUser) {
				this.afAuth.auth.signOut()
				resolve();
			}
			else {
				reject();
			}
		});
	}
}
