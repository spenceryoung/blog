import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { BlogResolver } from './blog/blog-resolver.service';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path: 'blog', 
        component: BlogComponent
      }
    ])
  ],
  providers: [BlogResolver]
})
export class BlogModule { }
