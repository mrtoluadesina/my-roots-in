import { AsyncStorage } from "react-native";
import * as types from "./types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = message => ({ type: types.SET_ERROR, message });

export const setUser = (token, user) => ({ type: types.SET_USER, token, user });

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
      const {name, email} = res.data.payload;
      const token = res.data.token;
      const user = {
        name, email, token
      }
      dispatch(setUser(user));
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
