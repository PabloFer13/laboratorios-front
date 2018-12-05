import { takeLatest, put, select, call } from 'redux-saga/effects';
import { listsActions } from '../actions';
import api from '../../services/api';

export function* getMateriasSaga() {
  const {
    data: { get_active_Subjects: materias }
  } = yield call(api.subjects.get);

  yield put(listsActions.setMaterias(materias));
}

export function* getMaestrosSaga({ payload }) {
  const {
    data: { get_Subject_Teachers: maestros }
  } = yield call(api.subjects.getTeachers, { subjectId: Number(payload) });

  yield put(listsActions.setMaestros(maestros));
}

export function* getLabsSaga() {
  const {
    data: { get_labs: labs }
  } = yield call(api.labs.get);
  yield put(listsActions.setLabs(labs));
}

export default function* listsSaga() {
  yield takeLatest(listsActions.getMaterias.type, getMateriasSaga);
  yield takeLatest(listsActions.getMaestros.type, getMaestrosSaga);
  yield takeLatest(listsActions.getLabs.type, getLabsSaga);
}
