import { createActions } from 'ractionx';

const prefix = 'ucaribe/reserva-laboratorios/app';

const types = [
  'LOG_IN',
  'CREATE_ACCOUNT',
  'TOGGLE_LOG_IN_FORM',
  'SET_STATUS',
  'GO_TO',
  'LOG_OUT',
  'SET_TOKEN'
];

export const {
  logIn,
  createAccount,
  toggleLogInForm,
  setStatus,
  goTo,
  logOut,
  setToken
} = createActions(prefix, types);

export default {
  logIn,
  createAccount,
  toggleLogInForm,
  setStatus,
  goTo,
  logOut,
  setToken
};
