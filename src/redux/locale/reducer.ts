import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { setLocale } from './action';
import { LOCALES } from '../../lang';
import { reducerSetters } from '../../utils/helpers';

const { setPayload } = reducerSetters;

const defaultLang = localStorage.getItem('i18nextLng') || LOCALES.ENGLISH;

const locale = createReducer(defaultLang, {
    [setLocale.type]: setPayload,
});

export const localeReducer = combineReducers({ locale });
