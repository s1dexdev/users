import { State } from '../../interfaces';

export const localeSelector = (state: State) => state.localeReducer.locale;
