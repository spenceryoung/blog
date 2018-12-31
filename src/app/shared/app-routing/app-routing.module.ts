import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home/home.component';
import { ErrorComponent } from '../error/error.component';
import { BlogComponent } from 'src/app/blog/blog/blog.component';
import { AboutComponent } from 'src/app/home/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'about', component: AboutComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: ErrorComponent}
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
