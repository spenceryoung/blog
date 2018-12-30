import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
