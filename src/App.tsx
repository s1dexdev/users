import { useSelector } from 'react-redux';
import { Routes, Navigate, Route } from 'react-router-dom';
import {
    PublicRoute,
    PrivateRoute,
    Header,
    Container,
    AppBar,
} from './components';
import { LoginPage, UsersPage, UserInfoPage } from './pages';
import { isAuthenticatedSelector } from './redux/auth/selectors';
import { navConfig } from './utils/constants';

function App() {
    const isAuth = useSelector(isAuthenticatedSelector);
    const { login, users, user, userId } = navConfig;

    return (
        <>
            <Header />
            <Container>
                {isAuth && <AppBar />}
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
                        path={user.path}
                        element={<PrivateRoute component={UserInfoPage} />}
                    >
                        <Route
                            path={userId.path}
                            element={<PrivateRoute component={UserInfoPage} />}
                        />
                    </Route>

                    <Route
                        path="/"
                        element={<Navigate replace to={login.path} />}
                    />
                </Routes>
            </Container>
        </>
    );
}

export default App;
