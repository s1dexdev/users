import { Provider } from 'react-redux';
import { Routes, Navigate, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import { PublicRoute, PrivateRoute } from './components';
import { LoginPage, UsersPage, UserInfoPage } from './pages';
import { navConfig } from './utils/constants';

function App() {
    const { login, users, userInfo } = navConfig;

    return (
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <Routes>
                    <Route
                        path={login.path}
                        element={<PublicRoute component={LoginPage} />}
                    />
                    <Route
                        path={users.path}
                        element={<PrivateRoute component={UsersPage} />}
                    />

                    <Route
                        path={userInfo.path}
                        element={<PrivateRoute component={UserInfoPage} />}
                    />

                    <Route
                        path="/"
                        element={<Navigate replace to={login.path} />}
                    />
                </Routes>
            </PersistGate>
        </Provider>
    );
}

export default App;
