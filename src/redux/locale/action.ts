import { createAction } from '@reduxjs/toolkit';

const setLocale = createAction<string>('LOCALE/SET_LOCALE');

export { setLocale };
