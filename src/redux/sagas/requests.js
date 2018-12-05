import { call, takeLatest, select, put } from 'redux-saga/effects';
import { requestsActions } from '../actions';
import api from '../../services/api';

export function* userRequestsSaga() {
  const { id: userId } = yield select(({ user }) => user);
  const {
    data: { user_Requests: reqs }
  } = yield call(api.requests.getUserRequests, { userId });
  yield put(requestsActions.setRequests(reqs));
}

export function* managerRequestsSaga() {
  const { id: userId } = yield select(({ user }) => user);
  const {
    data: { encargado_Requests: reqs }
  } = yield call(api.requests.getManagerRequests, { userId });
  yield put(requestsActions.setRequests(reqs));
}

export default function* requestsSaga() {
  yield takeLatest(requestsActions.getUserRequests.type, userRequestsSaga);
  yield takeLatest(
    requestsActions.getManagerRequests.type,
    managerRequestsSaga
  );
}
