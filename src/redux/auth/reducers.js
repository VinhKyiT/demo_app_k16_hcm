import {LOGIN, LOGOUT} from './constants';

const initialState = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS: {
      return {
        isLoggedIn: true,
        accessToken: action.payload?.accessToken,
        refreshToken: action.payload?.refreshToken,
      };
    }
    case LOGIN.FAILED: {
      return {
        ...state,
        error: action.payload,
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
