import { takeLatest, put, call } from 'redux-saga/effects';
import moment from 'moment';
import { semesterActions, formActions } from '../actions';
import api from '../../services/api';

export function* getSaga() {
  const {
    data: {
      get_active_Semester: { start_date: startDate, end_date: endDate }
    }
  } = yield call(api.semester.getActive);

  // const startDate = moment(rawStartDate, 'YYYY-MM-DD').format('DD/MM/YYYY');
  // const endDate = moment(rawEndDate, 'YYYY-MM-DD').format('DD/MM/YYYY');

  yield put(semesterActions.setSemester({ startDate, endDate }));
  yield put(formActions.setFechaInicio(startDate));
  yield put(formActions.setFechaFinal(endDate));
}

export default function* semesterSaga() {
  yield takeLatest(semesterActions.getSemester.type, getSaga);
}
