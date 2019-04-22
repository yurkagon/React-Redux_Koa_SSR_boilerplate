import * as types from '~/web/actions/home/types';

const initialState = {
  data: []
};

const homeReducer = (state = initialState, action) => {

  switch(action.type) {
    case types.SET_POSTS: {
      return {
        ...state,
        data: action.payload
      }
    }
    default:
      return state;
  }
}

export default homeReducer;
