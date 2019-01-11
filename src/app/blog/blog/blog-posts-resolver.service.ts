import { Injectable } from "@angular/core";
import { IBlogPost } from "./blog.model";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable} from "rxjs";
import { DBService } from "src/app/core/db.service";


@Injectable({
	providedIn: 'root'
})
export class BlogPostsResolver implements Resolve<any> {
	private posts: IBlogPost[];
	constructor(private dbService: DBService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBlogPost[]> {
		return this.dbService.getBlogPosts();
	}
}
