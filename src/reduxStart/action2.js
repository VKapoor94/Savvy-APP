import {types} from './types';

export function fetchUserData(data) {
  return {
    type: types.SEND_REQUEST,
    payload: data,
  };
}

export function fetchUserDataSuccess(user) {
  return {
    type: types.SEND_REQUEST_SUCCESS,
    payload: user,
  };
}

export function fetchUserDataFailure(error) {
  return {
    type: types.SEND_REQUEST_FAILURE,
    payload: {},
    error: error,
  };
}
