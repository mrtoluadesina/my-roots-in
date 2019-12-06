import {SET_LOADING, SET_ERROR, SET_TOKEN} from './types';

const initialState = {
  isLoading: false,
  error: "",
  token: ""
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.message
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    default:
      return state
  }
}