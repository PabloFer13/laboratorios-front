import { takeLatest, put } from 'redux-saga/effects';
import formActions from '../actions/form';

export function* fechaInicioSaga({ payload: e }) {
  const {
    target: { value }
  } = e;
  yield put(formActions.setFechaInicio(value));
}

export function* fechaFinalSaga({ payload: e }) {
  const {
    target: { value }
  } = e;
  yield put(formActions.setFechaFinal(value));
}

export default function* formSaga() {
  yield takeLatest(formActions.changeFechaInicio, fechaInicioSaga);
  yield takeLatest(formActions.changeFechaFinal, fechaFinalSaga);
}
