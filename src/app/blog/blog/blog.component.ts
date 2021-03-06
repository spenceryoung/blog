import { Component, OnInit } from '@angular/core';
import { DBService } from 'src/app/core/db.service';
import { IBlogPost } from './blog.model';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
	posts: IBlogPost[] = [];
	constructor(private dbService: DBService, private route: ActivatedRoute) {	}

	ngOnInit() {
		this.route.data.subscribe(
			data => this.posts = data['posts']
		);
	}
}
