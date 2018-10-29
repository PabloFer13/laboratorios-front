import app from './app';
import user from './user';
import lists from './lists';

export const appActions = { ...app };
export const userActions = { ...user };
export const listsActions = { ...lists };

export default {
  appActions,
  userActions,
  listsActions
};
