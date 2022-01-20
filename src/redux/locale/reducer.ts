import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { setLocale } from './action';
import { LOCALES } from '../../lang';

const defaultLang = localStorage.getItem('i18nextLng') || LOCALES.ENGLISH;

const locale = createReducer(defaultLang, {
    [setLocale.type]: (_, { payload }) => payload,
});

export const localeReducer = combineReducers({ locale });
