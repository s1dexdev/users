import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '../../components';
import { loginRequest } from '../../redux/auth/actions';
import { loadingSelector } from '../../redux/auth/selectors';

export const LoginFormContainer = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);

    const login = useCallback(() => dispatch(loginRequest()), [dispatch]);

    return <LoginForm loading={isLoading} translate={t} onLogin={login} />;
};
