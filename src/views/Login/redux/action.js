import * as types from "./types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = message => ({ type: types.SET_ERROR, message });

export const setUser = token => ({ type: types.SET_USER, token });

export const login = payload => dispatch => {
  dispatch(loading(true));
  return axios
    .post(BASE_URL + "", payload)
    .then(res => {
      dispatch(loading(false));

      return res.data;
    })
    .catch(error => {
      dispatch(loading(false));
      const { message } = error;
      dispatch(errorMethod(message));
      return error;
    });
};
