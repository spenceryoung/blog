import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: 'login', component: LoginComponent }
		]),
		AngularFireAuthModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class UserModule { }
