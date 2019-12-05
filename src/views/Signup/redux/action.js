import * as types from './types';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../../../constants/api';

export const loading = isLoading => ({type: types.SET_LOADING, isLoading})

export const errorMethod = message => ({type: types.SET_ERROR, message})

export const register = payload => dispatch => {
  dispatch(loading(true));
  return axios
    .post(BASE_URL + "/user", payload)
    .then(res => {
      console.log(res.data);
      dispatch(loading(false));
      AsyncStorage.setItem("token", res.data.token);
      return res.data
    })
    .catch(error => {
      console.log(error);
      dispatch(loading(true));
      const {message} = error;
      dispatch(errorMethod(message));
      return error;
    })
}