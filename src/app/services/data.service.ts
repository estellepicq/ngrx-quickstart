import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { POSTS } from './fake-posts';
import { Post } from '../models/posts-types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
  ) { }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }
}
