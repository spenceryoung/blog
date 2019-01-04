import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	constructor(private authService: AuthService, private router: Router) { }

	isAuthenticated(): boolean {
		return this.authService.isAuthenticated();
	}

	logout() {
		this.authService.logout().then(res => {
			this.router.navigate(['/home']);
		}, err => {
			console.log(err);
		})
	}
}
