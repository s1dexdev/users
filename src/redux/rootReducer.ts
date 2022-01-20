import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer as auth } from './auth';
import { usersReducer } from './users';
import { localeReducer } from './locale';

const authPersistConfig = {
    key: 'token',
    storage,
    whitelist: ['isAuthenticated'],
};

export default combineReducers({
    authReducer: persistReducer(authPersistConfig, auth),
    usersReducer,
    localeReducer,
});
