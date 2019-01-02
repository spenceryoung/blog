import { Component, OnInit } from '@angular/core';
import { DBService } from 'src/app/core/db.service';
import { IBlogPost } from './blog.model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: IBlogPost[] = [];
	constructor(private dbService: DBService) { }

  ngOnInit(): void {
		this.dbService.getBlogPosts().subscribe(
      posts => {
         this.posts = posts;
      }
    ); 
	}
}
