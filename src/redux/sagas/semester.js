import { takeLatest, put, call } from 'redux-saga/effects';
import moment from 'moment';
import { semesterActions, formActions } from '../actions';
import api from '../../services/api';

export function* getSaga() {
  const {
    data: {
      get_active_Semester: { start_date: rawStartDate, end_date: rawEndDate }
    }
  } = yield call(api.semester.getActive);

  const startDate = moment(rawStartDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
  const endDate = moment(rawEndDate, 'DD/MM/YYYY').format('YYYY-MM-DD');

  yield put(semesterActions.setSemester({ startDate, endDate }));
  yield put(formActions.setFechaInicio(startDate));
  yield put(formActions.setFechaFinal(endDate));
}

export default function* semesterSaga() {
  yield takeLatest(semesterActions.getSemester.type, getSaga);
}
