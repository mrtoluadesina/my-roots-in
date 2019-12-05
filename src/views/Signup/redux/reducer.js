import { SET_LOADING, SET_ERROR } from "./types";

const initialState = {
  isLoading: false,
  error: ""
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
