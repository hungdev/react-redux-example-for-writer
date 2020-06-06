// reducers/peopleReducer.js
import axios from '../config/axiosConfig';

import { REQUEST, SUCCESS, FAILURE } from '../utils/actionTypes';


export const ACTION_TYPES = {
  FETCH_PEOPLE: 'people/FETCH_PEOPLE',
  RESET: 'people/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  people: [],
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

// Reducer

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PEOPLE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_PEOPLE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_PEOPLE):
      return {
        ...state,
        loading: false,
        people: action.payload.data.data,
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}


const apiUrl = 'http://domainforoffer.com';
// Actions

export const getProducts = params => {
  return {
    type: ACTION_TYPES.FETCH_PEOPLE,
    payload: axios.get(`${apiUrl}/get-products`, { params })
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});