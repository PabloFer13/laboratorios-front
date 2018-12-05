import { takeLatest, put, select, call } from 'redux-saga/effects';
import { reservationsActions } from '../actions';
import api from '../../services/api';

export function* userReservationsSaga() {
  const userId = yield select(({ user }) => user.id);
  const {
    data: { reservas }
  } = yield call(api.reservations.get, { userId });

  yield put(reservationsActions.setReservations(reservas));
}

export function* ownerReservationsSaga() {
  const userId = yield select(({ user }) => user.id);
  const {
    data: { reservas }
  } = yield call(api.reservations.get, { userId });

  yield put(reservationsActions.setReservations(reservas));
}

export default function* reservationsSaga() {
  yield takeLatest(
    reservationsActions.fetchUserReservations.type,
    userReservationsSaga
  );

  yield takeLatest(
    reservationsActions.fetchOwnersReservations.type,
    ownerReservationsSaga
  );
}
