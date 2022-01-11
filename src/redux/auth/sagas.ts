import { call, put, takeLatest } from '@redux-saga/core/effects';
import { LOGIN_REQUEST } from './types';
import { loginSuccess, loginError } from './actions';

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

export function* watchAuth(): Generator {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}
