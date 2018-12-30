import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'blog', 
        component: BlogComponent
      },
    ])
  ]
})
export class BlogModule { }
