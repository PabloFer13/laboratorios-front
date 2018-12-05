import { createActions } from 'ractionx';

const prefix = 'ucaribe/reserva-laboratorios/reservations';

const types = [
  'FETCH_USER_RESERVATIONS',
  'FETCH_OWNERS_RESERVATIONS',
  'SET_RESERVATIONS',
  'ADD_RESERVATIONS'
];

export const {
  fetchUserReservations,
  fetchOwnersReservations,
  setReservations,
  addReservations
} = createActions(prefix, types);

export default {
  fetchUserReservations,
  fetchOwnersReservations,
  setReservations,
  addReservations
};
