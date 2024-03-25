import {GET_USER_PROFILE} from './constants';

const initialState = {
  userInfo: {},
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE.SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };
    case GET_USER_PROFILE.FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default profileReducer;
