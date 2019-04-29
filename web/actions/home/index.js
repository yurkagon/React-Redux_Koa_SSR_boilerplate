import axios from 'axios';
import * as types from './types';

import { switcher } from '~/utils';

export const setPosts = posts => ({
  type: types.SET_POSTS,
  payload: posts
});

export const fetchPosts = () => async (dispatch) => {
  try {
    const posts = await switcher({
      browser: async () => {
        const response = await axios.get('http://localhost:3000/posts');

        return response.data
      },
      server: () => require('~/server/controllers/post').getPosts()
    });

    dispatch(setPosts(posts));
  } catch (e) {

  }
};
