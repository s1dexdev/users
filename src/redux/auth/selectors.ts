interface IState {
    authReducer: {
        isAuthenticated: boolean;
        isLoading: boolean;
        erro: Error;
    };
}

export const isAuthenticated = (state: IState) =>
    state.authReducer.isAuthenticated;

export const loading = (state: IState) => state.authReducer.isLoading;
