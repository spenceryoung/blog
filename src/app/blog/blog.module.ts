import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { BlogPostResolver } from './blog/blog-post-resolver.service';
import { BlogPostsResolver } from './blog/blog-posts-resolver.service';
import { BlogDetailComponent } from './blog/blog-detail.component';

@NgModule({
	declarations: [BlogComponent, BlogDetailComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: 'blog',
				component: BlogComponent,
				resolve: {posts: BlogPostsResolver}
			},
			{
				path: 'blog/:id',
				component: BlogDetailComponent,
				resolve: {post: BlogPostResolver}
			}
		])
	],
	providers: [BlogPostsResolver, BlogPostResolver]
})
export class BlogModule { }
