import { combineReducers } from 'redux';
import app from './app';
import user from './user';
import lists from './lists';

export default combineReducers({
  app,
  user,
  lists
});
