import { User } from '../../interfaces';
import { RootState } from '../store';

const usersSelector = (state: RootState) => state.usersReducer.users as User[];
const loadingSelector = (state: RootState) => state.usersReducer.isLoading;

export { usersSelector, loadingSelector };
