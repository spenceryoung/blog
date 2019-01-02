import { Injectable } from "@angular/core";
import 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { IBlogPost } from "../blog/blog/blog.model";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DBService {
    private blogPostCollectionRef: AngularFirestoreCollection<IBlogPost>;
    private blogPostDocumentRef: AngularFirestoreDocument<IBlogPost>;
	constructor(public db: AngularFirestore) { }

    getBlogPosts(): Observable<IBlogPost[]> {
        this.blogPostCollectionRef = this.db.collection('blogposts');

        return this.blogPostCollectionRef.snapshotChanges().pipe(
            map(actions => actions.map(a => {
				var data: IBlogPost = a.payload.doc.data();
            	data.postId = a.payload.doc.id;
              	return data;
            }))
        );
    }
    getBlogPost(id: string): Observable<IBlogPost> {
        var doc: string = `blogposts/${id}`;
        this.blogPostDocumentRef = this.db.doc(doc);
        return this.blogPostDocumentRef.valueChanges();
    }
}
