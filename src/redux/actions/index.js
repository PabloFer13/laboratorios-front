import app from './app';
import user from './user';
import lists from './lists';
import reservation from './reservation';
import reservations from './reservations';
import semester from './semester';
import form from './form';
import requests from './requests';

export const appActions = { ...app };
export const userActions = { ...user };
export const listsActions = { ...lists };
export const reservationActions = { ...reservation };
export const reservationsActions = { ...reservations };
export const semesterActions = { ...semester };
export const formActions = { ...form };
export const requestsActions = { ...requests };

export default {
  appActions,
  userActions,
  listsActions,
  reservationActions,
  reservationsActions,
  semesterActions,
  formActions,
  requestsActions
};
