import {combineReducers} from 'redux';
import authReducer from './auth/reducers'; // Ví dụ đây là 1 reducer con
import cartReducer from './cart/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
