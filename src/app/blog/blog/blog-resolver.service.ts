import { Injectable } from "@angular/core";
import { IBlogPost } from "./blog.model";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { DBService } from "src/app/core/db.service";


@Injectable({
	providedIn: 'root'
})
export class BlogResolver implements Resolve<any> {
	private posts: IBlogPost[];
	constructor(private dbService: DBService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IBlogPost[] {
		// this.dbService.getBlogPost().subscribe(
		// posts => {
		//     this.posts = posts;
		// },
		//     error => { }
		// );
		return this.posts;
	}
}
