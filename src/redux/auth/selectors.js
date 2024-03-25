const loginStateSelector = state => state.auth.isLoggedIn;
const accessTokenSelector = state => state.auth.accessToken;
const refreshTokenSelector = state => state.auth.refreshToken;

export {loginStateSelector, accessTokenSelector, refreshTokenSelector};
