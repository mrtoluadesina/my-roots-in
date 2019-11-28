import * as types from "./types";

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = message => ({ type: types.SET_ERROR, message });

export const setUser = token => ({ type: types.SET_USER, token });
