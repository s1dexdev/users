import { Routes, Navigate, Route } from 'react-router-dom';
import { PublicRoute } from './components';
import { LoginPage } from './pages';
import { navConfig } from './utils/constants';

function App() {
    const { login, users } = navConfig;

    return (
        <Routes>
            {/* <Route path={login.path} element={<LoginPage />} /> */}
            <PublicRoute path={'/'} restricted redirectTo={users.path}>
                <LoginPage />
            </PublicRoute>

            {/* <Route path="/" element={<Navigate replace to={login.path} />} /> */}
        </Routes>
    );
}

export default App;
