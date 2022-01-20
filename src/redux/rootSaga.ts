import { all } from '@redux-saga/core/effects';
import { watchAuth } from './auth';
import { watchUsers } from './users';
import { watchLocale } from './locale';

export default function* rootSaga(): Generator {
    yield all([watchAuth(), watchUsers(), watchLocale()]);
}
