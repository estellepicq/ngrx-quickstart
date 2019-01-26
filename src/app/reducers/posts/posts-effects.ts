import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as postsActions from './posts-actions';

@Injectable()
export class PostsEffects {
  constructor(
    private dataService: DataService,
    private actions$: Actions,
  ) { }

  @Effect()
  loadPostsEffect$: Observable<Action> = this.actions$.pipe(
    ofType<postsActions.LoadPosts>(postsActions.PostsActionTypes.LoadPosts),
    switchMap(action =>
      this.dataService.getPosts().pipe(
        map(posts => new postsActions.LoadPostsSuccess({ posts })
        )
      )
    )
  );

}
