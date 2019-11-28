import { SET_LOADING, SET_ERROR, SET_USER } from "./types";
import isEmpty from "lodash/isEmpty";

const intialState = {
  isLoading: false,
  error: "",
  isAuthenticated: false
};

export default (state = intialState, action = {}) => {
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
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.token)
      };
    default:
      return state;
  }
};
