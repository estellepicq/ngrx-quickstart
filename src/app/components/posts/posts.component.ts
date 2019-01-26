import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts-types';
import { DataService } from 'src/app/services/data.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import * as fromPosts from '../../reducers/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  favoritePost$: Observable<Post>;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.posts$ = this.store.pipe(select(fromPosts.selectAll));
    this.favoritePost$ = this.store.pipe(select(fromPosts.selectFavoritePost));
  }

  upvote(post: Post) {
    this.store.dispatch(new fromPosts.UpvotePost({ id: post.id, upvotes: post.upvotes + 1 }));
  }

  downvote(post: Post) {
    this.store.dispatch(new fromPosts.DownvotePost({ id: post.id, downvotes: post.downvotes + 1 }));
  }

}
