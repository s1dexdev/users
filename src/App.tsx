import { Routes, Navigate, Route } from 'react-router-dom';
import { PublicRoute, PrivateRoute, Header } from './components';
import { LoginPage, UsersPage, UserInfoPage } from './pages';
import { navConfig } from './utils/constants';

function App() {
    const { login, users, userInfo } = navConfig;

    return (
        <>
            <Header />
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
        </>
    );
}

export default App;
