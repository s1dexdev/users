import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Spinner } from '../../components';
import { logoutRequest } from '../../redux/auth/actions';
import { loadingSelector } from '../../redux/auth/selectors';
import { navConfig } from '../../utils/constants';
import styles from './AppBar.module.scss';

export const AppBar = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);
    const { t } = useTranslation();

    const logout = () => dispatch(logoutRequest());

    const setClass = ({ isActive }: { isActive: boolean }) =>
        `${styles.nav__link}` +
        (isActive ? ` ${styles.nav__link_activated}` : '');

    return (
        <>
            <nav className={styles.nav}>
                <NavLink end to={navConfig.users.path} className={setClass}>
                    {t('appBar.users')}
                </NavLink>
                <NavLink to={navConfig.userInfo.path} className={setClass}>
                    {t('appBar.userInfo')}
                </NavLink>
                <button className="btn" type="button" onClick={logout}>
                    {t('appBar.logout')}
                </button>
            </nav>
            {isLoading && <Spinner />}
        </>
    );
};
