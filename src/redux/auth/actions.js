import {LOGIN_SUCCESS, LOGOUT} from './constants';

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const logout = payload => ({
  type: LOGOUT,
  payload,
});
