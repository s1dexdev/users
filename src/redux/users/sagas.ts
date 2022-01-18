import { call, put, takeLatest } from '@redux-saga/core/effects';
import { FETCH_USERS_REQUEST } from './types';
import {
    fetchUsersSuccess,
    fetchUsersError,
    addFetchUsersSuccess,
} from './actions';
import fetchUsers from '../../api/userService';
import { User } from '../../interfaces';

interface IParams {
    type: string;
    payload?: {
        page: number;
        results: number;
    };
}

function* fetchUsersSaga({ payload }: IParams): Generator {
    try {
        const users = (yield call(fetchUsers, payload)) as User[];

        if (payload) {
            yield put(addFetchUsersSuccess(users));
        } else {
            yield put(fetchUsersSuccess(users));
        }
    } catch (error) {
        yield put(fetchUsersError(error));
    }
}

export function* watchUsers(): Generator {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
