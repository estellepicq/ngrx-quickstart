import { Action } from '@ngrx/store';
import { Post } from 'src/app/models/posts-types';

export enum PostsActionTypes {
  LoadPosts = '[Posts] LOAD',
  LoadPostsSuccess = '[Posts] LOAD SUCCESS',
  AddPost = '[Posts] ADD',
  DeletePost = '[Posts] DELETE',
  UpvotePost = '[Posts] UPVOTE',
  DownvotePost = '[Posts] DOWNVOTE'
}

export class LoadPosts implements Action {
  readonly type = PostsActionTypes.LoadPosts;
  constructor() { }
}

export class LoadPostsSuccess implements Action {
  readonly type = PostsActionTypes.LoadPostsSuccess;
  constructor(public payload: { posts: Post[] }) { }
}

export class AddPost implements Action {
  readonly type = PostsActionTypes.AddPost;
  constructor(public payload: { post: Post }) { }
}

export class DeletePost implements Action {
  readonly type = PostsActionTypes.DeletePost;
  constructor(public payload: { id: string }) { }
}

export class UpvotePost implements Action {
  readonly type = PostsActionTypes.UpvotePost;
  constructor(public payload: { id: string, upvotes: number }) { }
}

export class DownvotePost implements Action {
  readonly type = PostsActionTypes.DownvotePost;
  constructor(public payload: { id: string, downvotes: number }) { }
}

export type PostsActions =
  LoadPosts
  | LoadPostsSuccess
  | AddPost
  | DeletePost
  | UpvotePost
  | DownvotePost;
