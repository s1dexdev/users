import { all } from '@redux-saga/core/effects';
import { watchAuth } from './auth';

export default function* rootSaga(): Generator {
    yield all([watchAuth()]);
}
