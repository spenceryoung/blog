import { Injectable } from "@angular/core";
import 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { IBlogPostInfo } from "../blog/blog/blog.model";

@Injectable({
    providedIn: 'root'
})
export class DBService {
    private blogPostCOllectionRef: AngularFirestoreCollection<IBlogPostInfo>;
	constructor(public db: AngularFirestore) {
        this.blogPostCOllectionRef = db.collection('blogposts');
    }

    getBlogPost(): Observable<any> {
        return this.blogPostCOllectionRef.valueChanges();
    }
}
