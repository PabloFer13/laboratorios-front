import { all } from 'redux-saga/effects';
import app from './app';
import semester from './semester';
import form from './form';
// import lists from './lists';

export default function* rootSaga() {
  yield all([app(), semester(), form()]);
}
