import { Injectable } from "@angular/core";
import { IBlogPost } from "./blog.model";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable} from "rxjs";
import { DBService } from "src/app/core/db.service";


@Injectable({
	providedIn: 'root'
})
export class BlogPostResolver implements Resolve<any> {
	constructor(private dbService: DBService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBlogPost> {
    const id = route.paramMap.get('id');
		return this.dbService.getBlogPost(id);
	}
}