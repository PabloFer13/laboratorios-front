import { takeLatest, put, select, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { appActions as app, userActions } from '../actions';
import api from '../../services/api';

export function* logInSaga({ payload }) {
  try {
    const {
      data: {
        login: { first_name: name, last_name: lastName, id, userType, token }
      }
    } = yield call(api.session.login, payload);

    const user = {
      name,
      lastName,
      id,
      userType
    };

    // console.log(userObj);

    /* const {
      data: { token, user }
    } = yield call(api.login, payload); */

    // yield call(api.auth, token);
    yield put(app.setToken(token));
    yield put(userActions.setUser(user));

    const cookie = { user, token };
    const cookieString = JSON.stringify(cookie);

    yield call([localStorage, 'setItem'], 'labsFront', cookieString);
    yield put(app.setStatus(true));
  } catch (err) {
    console.log(err);
  }
}

export function* createSaga({ payload }) {
  try {
    const {
      data: { token, user: userData }
    } = yield call(api.users.create, payload);
    yield call(api.auth, token);
    yield put(app.setToken(token));
    yield put(userActions.setUser(userData));
    yield put(app.setStatus(true));
  } catch (err) {
    console.log(err);
  }
}

export function* autoLoginSaga() {
  try {
    const cookieString = yield call([localStorage, 'getItem'], 'labsFront');
    const cookie = cookieString ? JSON.parse(cookieString) : false;
    if (cookie) {
      const { user, token } = cookie;
      yield put(userActions.setUser(user));
      yield call(api.auth, token);
      yield put(app.setToken(token));
      yield put(app.setStatus(true));
    }
  } catch (err) {
    //  TODO: handle some error
    console.log(err);
    alert('Se detecto un error al iniciar sesión automaticamente.');
  }
}

export function* logOutSaga() {
  yield call([localStorage, 'removeItem'], 'labsFront');
  yield put(app.setToken(''));
  yield put(app.setStatus(false));
  yield put(push('/'));
}

export function* generateRequestSaga({ payload }) {
  const {
    profesor,
    materia,
    laboratorio,
    tipo,
    dia,
    horaInicio,
    horaFinal,
    fechaInicio,
    fechaFinal
  } = payload;

  const { id } = yield select(({ user }) => user);

  const params = {
    userId: Number(id),
    teacherId: Number(profesor),
    subjectId: Number(materia),
    requestTypeId: Number(tipo),
    laboratoryId: Number(laboratorio),
    startTime: fechaInicio,
    endTime: fechaFinal,
    startDate: fechaInicio,
    endDate: fechaFinal,
    dia
  };
  try {
    yield call(api.requests.create, params);
    alert('Solicitud enviada, puede cerrar el formulario');
  } catch (err) {
    console.log(err);
    alert('Hubo un error intente mas tarde');
  }
}

export default function* appSaga() {
  yield takeLatest(app.logIn.type, logInSaga);
  yield takeLatest(app.createAccount.type, createSaga);
  yield takeLatest(app.autoLogin.type, autoLoginSaga);
  yield takeLatest(app.logOut.type, logOutSaga);
  yield takeLatest(app.generateRequest.type, generateRequestSaga);
}
