import { combineReducers } from 'redux';
import app from './app';
import user from './user';
import lists from './lists';
import reservation from './reservation';
import reservations from './reservations';
import semester from './semester';
import form from './form';

export default combineReducers({
  app,
  user,
  lists,
  reservation,
  reservations,
  semester,
  form
});
