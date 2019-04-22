import axios from 'axios';
import * as types from './types';

import { switcher } from '~/utils';

export const setPosts = posts => ({
  type: types.SET_POSTS,
  payload: posts
});

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await switcher({
      browser: () => axios.get('http://localhost:3000/posts'),
      server: () => require('~/server/controllers/post').getPosts()
    });

    const posts = response.data || response;

    dispatch(setPosts(posts));
  } catch (e) {

  }
};
