import { put, takeLatest } from '@redux-saga/core/effects';
import i18n from 'i18next';
import { setLocale } from './action';

interface Params {
    type: string;
    payload: string;
}

function* setLocaleSaga({ payload }: Params): Generator {
    i18n.changeLanguage(payload);
    put(setLocale(payload));
}

export function* watchLocale(): Generator {
    yield takeLatest(setLocale.type, setLocaleSaga);
}
