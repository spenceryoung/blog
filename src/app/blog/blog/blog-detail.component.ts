import { Component, OnInit } from '@angular/core';
import { IBlogPost } from './blog.model';
import { DBService } from 'src/app/core/db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-blog-detail',
	templateUrl: './blog-detail.component.html',
	styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
	post: IBlogPost;
	constructor(private dbService: DBService, private route: ActivatedRoute) { }

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		this.dbService.getBlogPost(id).subscribe(
			post => {
				this.post = post;
			}
		); 
	}
}
