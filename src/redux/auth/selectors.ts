import { State } from '../../interfaces';

const isAuthenticatedSelector = (state: State) =>
    state.authReducer.isAuthenticated;
const loadingSelector = (state: State) => state.authReducer.isLoading;

export { isAuthenticatedSelector, loadingSelector };
