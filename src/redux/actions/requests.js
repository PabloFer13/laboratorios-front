import { createActions } from 'ractionx';

const prefix = 'ucaribe/reserva-laboratorios/requests';

const types = ['GET_USER_REQUESTS', 'GET_MANAGER_REQUESTS', 'SET_REQUESTS'];

export const {
  getUserRequests,
  getManagerRequests,
  setRequests
} = createActions(prefix, types);

export default {
  getUserRequests,
  getManagerRequests,
  setRequests
};
