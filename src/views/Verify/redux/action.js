import * as types from "./types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import store from "../../../redux/store";

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = message => ({ type: types.SET_ERROR, message });

export const setToken = token => ({ type: types.SET_TOKEN, token });

export const verifyMethod = payload => dispatch => {
  dispatch(loading(true));

  const token = store.getState().Register.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return axios
    .put(BASE_URL + "/auth/verify", payload, config)
    .then(res => {
      dispatch(loading(false));
      dispatch(setToken(res.data.token))
      return res.data;
    })
    .catch(error => {
      dispatch(loading(false));
      const { message } = error;
      dispatch(errorMethod(message));
      throw error;
    });
};
