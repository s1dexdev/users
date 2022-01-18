import { State } from '../../interfaces';

const usersSelector = (state: State) => state.usersReducer.users;
const loadingSelector = (state: State) => state.usersReducer.isLoading;

export { usersSelector, loadingSelector };
