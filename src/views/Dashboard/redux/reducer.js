import { SET_LOADING, SET_ERROR, SET_WHERE_TO_PLANT, SET_WHY_PLANT_A_TREE, SET_TYPE_OF_OCCASSION, SET_HOW_TO_PLANT, SET_WHAT_TYPE_OF_TREE } from './types';

const initialState = {
  isLoading: false,
  error: "",
  location: "",
  country: "",
  locationType: "",
  treeType: "",
  isOccasion: false,
  occasion: "",
  isGift: false
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
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
    case SET_WHERE_TO_PLANT:
      return {
        ...state,
        locationType: action.locationType,
        country: action.country
      };
    case SET_WHY_PLANT_A_TREE:
      return {
        ...state,
        isGift: action.isGift,
        isOccasion: action.isOccasion
      }
    case SET_TYPE_OF_OCCASSION:
      return {
        ...state,
        occasion: action.occasion
      }
    case SET_HOW_TO_PLANT:
      return {
        ...state,
        location: action.location
      }
    case SET_WHAT_TYPE_OF_TREE:
      return {
        ...state,
        treeType: action.treeType
      }
    default:
      return state;
  }
}