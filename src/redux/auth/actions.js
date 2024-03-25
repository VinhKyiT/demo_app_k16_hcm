import {LOGIN, LOGOUT} from './constants';

export const loginRequest = payload => ({
  type: LOGIN.REQUEST,
  payload,
});

export const loginSuccess = payload => ({
  type: LOGIN.SUCCESS,
  payload,
});

export const loginFailed = payload => ({
  type: LOGIN.FAILED,
  payload,
});

export const logout = payload => ({
  type: LOGOUT,
  payload,
});