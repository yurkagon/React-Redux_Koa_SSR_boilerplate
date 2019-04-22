import axios from 'axios';
import * as types from './types';

export const setPosts = posts => ({
  type: types.SET_POSTS,
  payload: posts
});

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');

    const posts = response.data;

    dispatch(setPosts(posts));
  } catch (e) {

  }
};
