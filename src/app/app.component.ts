import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import * as fromPosts from './reducers/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new fromPosts.LoadPosts());
  }

}
