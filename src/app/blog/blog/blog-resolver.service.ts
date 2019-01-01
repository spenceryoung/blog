import { Injectable } from "@angular/core";
import { IBlogPostInfo } from "./blog.model";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from 'rxjs/operators';
import { DBService } from "src/app/core/db.service";


@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<any> {

  constructor(private dbService: DBService) { }
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dbService.getBlogPost().pipe(
      map(data => ({data: data})),
      catchError(error => {
          console.error(error);
          return of({data: null});
      })
    );
  }
}
