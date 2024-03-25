import {GET_USER_PROFILE} from './constants';

const getUserProfileRequest = payload => ({
  type: GET_USER_PROFILE.REQUEST,
  payload,
});

const getUserProfileSuccess = payload => ({
  type: GET_USER_PROFILE.SUCCESS,
  payload,
});

const getUserProfileFailed = payload => ({
  type: GET_USER_PROFILE.FAILED,
  payload,
});

export {getUserProfileRequest, getUserProfileSuccess, getUserProfileFailed};
