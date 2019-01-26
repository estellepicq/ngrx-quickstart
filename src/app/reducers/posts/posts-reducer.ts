import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Post } from '../../models/posts-types';
import { PostsActions, PostsActionTypes } from './posts-actions';
import { createFeatureSelector } from '@ngrx/store';

export interface PostsState extends EntityState<Post> {
}

export const adapter: EntityAdapter<Post> =
  createEntityAdapter<Post>({
    sortComparer: false,
  });

export const initialPostsState: PostsState =
  adapter.getInitialState({
  });

export function postsReducer(state: PostsState = initialPostsState, action: PostsActions): PostsState {
  switch (action.type) {
    case PostsActionTypes.LoadPosts: {
      return state;
    }
    case PostsActionTypes.LoadPostsSuccess: {
      return adapter.addAll(action.payload.posts, state);
    }
    case PostsActionTypes.AddPost: {
      return adapter.addOne(action.payload.post, state);
    }
    case PostsActionTypes.DeletePost: {
      return adapter.removeOne(action.payload.id, state);
    }
    case PostsActionTypes.UpvotePost: {
      return adapter.updateOne({
        id: action.payload.id,
        changes: { upvotes: action.payload.upvotes }
      }, state);
    }
    case PostsActionTypes.DownvotePost: {
      return adapter.updateOne({
        id: action.payload.id,
        changes: { downvotes: action.payload.downvotes }
      }, state);
    }
    default: {
      return state;
    }
  }
}

export const getPostsState = createFeatureSelector<PostsState>('posts');
