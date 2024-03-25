import {combineReducers} from 'redux';
import authReducer from './auth/reducers'; // Ví dụ đây là 1 reducer con
import cartReducer from './cart/reducers';
import profileReducer from './profile/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import loadingReducer from './loading/reducer';

// cấu hình persist cho authReducer
const authPersistConfig = {
  key: 'authPersistor',
  storage: AsyncStorage,
  // blacklist: ['refreshToken'],
  // whitelist: ['isLoggedIn'],
};

const cartPersistConfig = {
  key: 'cartPersistor',
  storage: AsyncStorage,
};

const profilePersistConfig = {
  key: 'profilePersistor',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
  profile: persistReducer(profilePersistConfig, profileReducer),
  loading: loadingReducer,
});

export default rootReducer;
