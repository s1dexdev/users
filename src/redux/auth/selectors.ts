import { RootState } from '../store';

const isAuthenticatedSelector = (state: RootState) =>
    state.authReducer.isAuthenticated;
const loadingSelector = (state: RootState) => state.authReducer.isLoading;

export { isAuthenticatedSelector, loadingSelector };
