import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  activePost: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_POSTS:
    debugger;
    console.log('reducer posts: case FETCH_POSTS')
    return { ...state, all: action.payload.data }
  default:
    return state;
  }
}
