import * as types from "./types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = message => ({ type: types.SET_ERROR, message });

export const tokenMethod = token => ({ type: types.SET_TOKEN, token });

export const register = payload => dispatch => {
  dispatch(loading(true));
  return axios
    .post(BASE_URL + "/user", payload)
    .then(res => {
      dispatch(loading(false));
      dispatch(tokenMethod(res.data.token));
      return res.data;
    })
    .catch(error => {
      dispatch(loading(true));
      const { message } = error;
      dispatch(errorMethod(message));
      return error;
    });
};
