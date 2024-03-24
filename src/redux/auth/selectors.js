const loginStateSelector = state => state.auth.isLoggedIn;
const accessTokenSelector = state => state.auth.accessToken;
const refreshTokenSelector = state => state.auth.refreshToken;
const userInfoSelector = state => state.auth.userInfo;
const userNameSelector = state => state.auth.userInfo?.name;

export {
  loginStateSelector,
  accessTokenSelector,
  refreshTokenSelector,
  userInfoSelector,
  userNameSelector,
};
