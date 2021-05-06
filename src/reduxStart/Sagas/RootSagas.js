import {take, call, all} from 'redux-saga/effects';

import {watchfecthDataSaga, watchfecthUserDataSaga} from './fecthDataSaga';
export default function* RootSaga() {
  yield all([watchfecthDataSaga(), watchfecthUserDataSaga()]);
}
