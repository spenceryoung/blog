import { Component, OnInit } from '@angular/core';
import { DBService } from 'src/app/core/db.service';
import { IBlogPostInfo } from './blog.model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  private posts: IBlogPostInfo[];
	constructor(private dbService: DBService) { }

  ngOnInit(): void {
		this.dbService.getBlogPost().subscribe(
			posts => {
        this.posts = posts;
			},
			error => { }
    );
	}
}