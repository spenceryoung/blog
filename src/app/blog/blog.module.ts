import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { BlogResolver } from './blog/blog-resolver.service';
import { BlogDetailComponent } from './blog/blog-detail.component';

@NgModule({
	declarations: [BlogComponent, BlogDetailComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: 'blog',
				component: BlogComponent
			},
			{
				path: 'blog/:id',
				component: BlogDetailComponent
			}
		])
	],
	providers: [BlogResolver]
})
export class BlogModule { }
