import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AppBar } from '../../components';
import { logoutRequest } from '../../redux/auth/actions';
import { loadingSelector } from '../../redux/auth/selectors';

export const AppBarContainer = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);

    const logout = useCallback(() => dispatch(logoutRequest()), [dispatch]);

    return <AppBar translate={t} loading={isLoading} logout={logout} />;
};
