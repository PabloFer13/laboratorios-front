import app from './app';
import user from './user';

export const appActions = { ...app };
export const userActions = { ...user };

export default {
  appActions,
  userActions
};
