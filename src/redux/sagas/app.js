import { takeLatest, put, select, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  appActions as app,
  userActions as user
} from '../actions';
import api from '../../services/api';

export function* logInSaga({ payload }){
  try {
    const { data: { token, userData } } = yield call(api.login, payload);
    yield call(api.auth, token);
    yield put(app.setToken(token));
    yield put(user.setUser(userData));
    yield put(app.setStatus(true));
  } catch (err) {
    console.log(err)
  }
}

export function* createSaga({ payload }){
  try {
    const { data: { token, user: userData } } = yield call(api.users.create, payload);
    yield call(api.auth, token);
    yield put(app.setToken(token));
    yield put(user.setUser(userData));
    yield put(app.setStatus(true));
  } catch (err) {
    console.log(err)
  }
}

export default function* appSaga() {
  yield takeLatest(app.logIn.type, logInSaga);
  yield takeLatest(app.createAccount.type, createSaga);
}