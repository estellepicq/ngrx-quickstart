import * as fromPosts from './posts';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  posts: fromPosts.PostsState;
}

export const reducers: ActionReducerMap<any> = {
  posts: fromPosts.postsReducer,
};

export const effects = [
  fromPosts.PostsEffects,
];
