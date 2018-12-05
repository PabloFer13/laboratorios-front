import { createActions } from 'ractionx';

const prefix = 'ucaribe/reserva-laboratorios/reservation';

const types = ['FETCH_RESERVATION', 'SET_RESERVATION'];

export const { fetchReservation, setReservation } = createActions(
  prefix,
  types
);

export default { fetchReservation, setReservation };
