import * as types from "./types";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import store from '../../../redux/store';

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = message => ({ type: types.SET_ERROR, message });

export const whereToPlantMethod = (locationType, country) => ({
  type: types.SET_WHERE_TO_PLANT,
  locationType,
  country
});

export const whyPlantMethod = isGift => ({
  type: types.SET_WHY_PLANT_A_TREE,
  isOcassion,
  isGift
});

export const typeOfOcassionMethod = ocassion => ({
  type: types.SET_TYPE_OF_OCCASSION,
  ocassion
});

export const howToPlantMethod = location => ({
  type: types.SET_HOW_TO_PLANT,
  location
});

export const whatTypeMethod = treeType => ({
  type: types.SET_WHAT_TYPE_OF_TREE,
  treeType
});

export const whereToPlant = payload => dispatch => {
  dispatch(loading(true));
  const { locationType, country } = payload;
  dispatch(whereToPlantMethod(locationType, country));
  dispatch(loading(false));
  return { statusCode: 200, message: "country selected" };
};

export const whyPlant = payload => dispatch => {
  dispatch(loading(true));
  dispatch(whyPlantMethod(payload.isGift));
  dispatch(loading(false));
  return { statusCode: 200, message: "reason chosen" };
};

export const typeOfOcassion = payload => dispatch => {
  dispatch(loading(true));
  const { isOcassion, ocassion } = payload;
  dispatch(typeOfOcassionMethod(isOcassion, ocassion));
  return { statusCode: 200, message: "ocassion selected" };
};

export const howToPlant = payload => dispatch => {
  dispatch(loading(true));
  dispatch(howToPlantMethod(payload.location));
  dispatch(loading(false));
  return { statusCode: 200, message: "location selected" };
};

export const whatTypeOfTree = payload => dispatch => {
  dispatch(loading(true));
  dispatch(whatTypeMethod(payload.treeType));
  dispatch(loading(false));
  return { statusCode: 200, message: "Tree Selected" };
};

const token = store.getState().Login.token;

const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}

export const plantTree = payload => dispatch => {
  dispatch(loading(true));
  return axios
    .post(BASE_URL + '/tree', payload, config)
    .then(res => {
      dispatch(loading(false));
      return res.data
    })
    .catch(error => {
      dispatch(loading(false));
      const {message} = error;
      dispatch(errorMethod(message));
      throw error;
    })
}