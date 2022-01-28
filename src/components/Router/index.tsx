import { lazy, Suspense } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import { PublicRoute, PrivateRoute, Spinner } from '../../components';
import { navConfig } from '../../utils/constants';

const LoginPage = lazy(() => import('../../pages/LoginPage'));
const UsersPage = lazy(() => import('../../pages/UsersPage'));
const UserInfoPage = lazy(() => import('../../pages/UserInfoPage'));

export const Router = () => {
    const { login, users, userInfo, userId } = navConfig;

    return (
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
    );
};
