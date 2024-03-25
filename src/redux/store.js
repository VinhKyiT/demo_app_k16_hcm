import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export {store, persistor};
