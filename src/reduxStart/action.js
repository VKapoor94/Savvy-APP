import {types} from './types';

export function fetchData(data) {
  return {
    type: types.SEND_REQUEST,
    payload: data,
  };
}

export const fetchDataSuccess = user => {
  return {
    type: types.SEND_REQUEST_SUCCESS,
    payload: user,
  };
};

export const fecthDataFailure = error => {
  return {
    type: types.SEND_REQUEST_FAILURE,
    payload: {},
    error: error,
  };
};
