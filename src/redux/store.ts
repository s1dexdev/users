import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = new MiddlewareArray().concat(sagaMiddleware);

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export default { store, persistor };
