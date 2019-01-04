import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { NgForm } from '@angular/forms';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	pageTitle = 'Log In';

	constructor(private authService: AuthService, private router: Router) { }

	login(loginForm: NgForm) {
		this.authService.login(loginForm.form.value).then(res => {
			this.router.navigate(['/home']);
		}, err => {
			console.log(err);
		})
	}
}
