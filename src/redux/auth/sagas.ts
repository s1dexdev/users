import { call, put, takeLatest } from '@redux-saga/core/effects';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from './types';
import {
    loginSuccess,
    logoutSuccess,
    loginError,
    logoutError,
} from './actions';

// Псевдо-запрос
const request = () => new Promise(resolve => setTimeout(resolve, 1000));

function* loginSaga() {
    try {
        yield call(request);
        yield put(loginSuccess());
    } catch (error) {
        yield put(loginError(error));
    }
}

function* logoutSaga() {
    try {
        yield call(request);
        yield put(logoutSuccess());
    } catch (error) {
        yield put(logoutError(error));
    }
}

export function* watchAuth(): Generator {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
    yield takeLatest(LOGOUT_REQUEST, logoutSaga);
}
