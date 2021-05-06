import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './reduxStart/reducers/RootReducer';
import RootSaga from './reduxStart/Sagas/RootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
