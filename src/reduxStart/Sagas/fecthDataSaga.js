import {takeEvery, call, put} from 'redux-saga/effects';
import {types} from '../types';
import axios from 'axios';
import {fetchDataSuccess} from '../action';
import {fetchUserDataSuccess} from '../action2';
function* asyncfetchRequest(action) {
  try {
    const url = `https://reqres.in/api/users/${action.payload}`;
    const response = yield call(() => axios.get(url));
    yield put(fetchDataSuccess(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

function* asyncFectUserRequest(action) {
  try {
    const url = `https://reqres.in/api/users/${action.payload}`;
    const response = yield call(() => axios.get(url));
    yield put(fetchUserDataSuccess(response.data.data));
  } catch (error) {}
}

export function* watchfecthDataSaga() {
  yield takeEvery(types.SEND_REQUEST, asyncfetchRequest);
}

export function* watchfecthUserDataSaga() {
  yield takeEvery(types.SEND_REQUEST, asyncFectUserRequest);
}
