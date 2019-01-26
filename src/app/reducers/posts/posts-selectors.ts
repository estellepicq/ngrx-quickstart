import { adapter, getPostsState} from './posts-reducer';
import { createSelector } from '@ngrx/store';

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors(getPostsState);

export const selectFavoritePost = createSelector(
  selectAll,
  postsState => {
    let favoritePost = postsState[0];
    postsState.forEach(post => {
      if (post.upvotes - post.downvotes > favoritePost.upvotes - favoritePost.downvotes) {
        favoritePost = post;
      }
    });
    return favoritePost;
  }
);
