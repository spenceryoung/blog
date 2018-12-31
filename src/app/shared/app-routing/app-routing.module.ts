import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home/home.component';
import { ErrorComponent } from '../error/error.component';
import { AboutComponent } from 'src/app/home/about/about.component';
import { UserModule } from 'src/app/user/user.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: ErrorComponent}
    ]),
    UserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
