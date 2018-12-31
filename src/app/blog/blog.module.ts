import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'blog', component: BlogComponent }
    ])
  ], 
  declarations: [BlogComponent]
})
export class BlogModule { }
