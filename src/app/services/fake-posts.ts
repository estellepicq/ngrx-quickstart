import { Post } from '../models/posts-types';

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'Post One',
    description: 'This is the post one',
    upvotes: 6,
    downvotes: 2
  },
  {
    id: '2',
    title: 'Post Two',
    description: 'This is the post two',
    upvotes: 2,
    downvotes: 0
  },
  {
    id: '3',
    title: 'Post Three',
    description: 'This is the post three',
    upvotes: 15,
    downvotes: 50
  }
];
