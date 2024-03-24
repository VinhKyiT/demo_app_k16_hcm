import {LOGIN_SUCCESS, LOGOUT} from './constants';

const initialState = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
  userInfo: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        isLoggedIn: true,
        accessToken: action.payload?.accessToken,
        refreshToken: action.payload?.refreshToken,
        userInfo: action.payload?.userInfo,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;
