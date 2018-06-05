import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operator';


interface Post {
  title: string;
  content: string;
}

interface MisPost {
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  mispostsCol: AngularFirestoreCollection<MisPost>;
  misposts: Observable<MisPost[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();

    this.mispostsCol = this.afs.collection('misposts');
    this.misposts = this.mispostsCol.valueChanges();
  }
}
