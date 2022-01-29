import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { setLocale } from './action';
import { LOCALES } from '../../lang';
import { setters } from '../../utils/helpers';

const { setPayload } = setters;

const defaultLang = localStorage.getItem('i18nextLng') || LOCALES.ENGLISH;

const locale = createReducer(defaultLang, {
    [setLocale.type]: setPayload,
});

export const localeReducer = combineReducers({ locale });
