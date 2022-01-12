import { all } from '@redux-saga/core/effects';
import { watchAuth } from './auth';
import { watchUsers } from './users';

export default function* rootSaga(): Generator {
    yield all([watchAuth(), watchUsers()]);
}
