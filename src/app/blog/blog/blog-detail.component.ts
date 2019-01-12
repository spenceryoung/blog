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
	constructor(private dbService: DBService, private route: ActivatedRoute) {	}

	ngOnInit() {
		this.route.data.subscribe(
			data => this.post = data['post']
		);
	}
}
