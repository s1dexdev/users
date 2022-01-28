import { RootState } from '../store';

export const localeSelector = (state: RootState) => state.localeReducer.locale;
