import { AsyncStorage } from "react-native";
import * as types from "./types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = message => ({ type: types.SET_ERROR, message });

export const setUser = token => ({ type: types.SET_USER, token });

export const setToken = token => ({ type: types.SET_TOKEN, token });

export const login = payload => dispatch => {
  dispatch(loading(true));
  return axios
    .post(BASE_URL + "/user/login", payload)
    .then(res => {
      dispatch(loading(false));
      AsyncStorage.setItem("isLoggedIn", "1");
      AsyncStorage.setItem("userData", JSON.stringify(res.data.payload));
      AsyncStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.token));
      dispatch(setToken(res.data.token));
      return res.data;
    })
    .catch(error => {
      dispatch(loading(false));
      const { message } = error;
      dispatch(errorMethod(message));
      return error;
    });
};
