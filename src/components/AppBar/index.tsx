import { NavLink } from 'react-router-dom';
import { Spinner, Button } from '../../components';
import { navConfig } from '../../utils/constants';
import styles from './AppBar.module.scss';

interface Params {
    translate: (value: string) => string;
    loading: boolean;
    logout: () => void;
}

export const AppBar = ({ translate, loading, logout }: Params) => {
    const setClass = ({ isActive }: { isActive: boolean }) =>
        `${styles.nav__link}` +
        (isActive ? ` ${styles.nav__link_activated}` : '');

    return (
        <nav className={styles.nav}>
            <NavLink end to={navConfig.users.path} className={setClass}>
                {translate('appBar.users')}
            </NavLink>
            <NavLink to={navConfig.userInfo.path} className={setClass}>
                {translate('appBar.userInfo')}
            </NavLink>
            <Button
                customClass={styles.nav__logout}
                name="logout"
                onHandleClick={logout}
            >
                {translate('appBar.logout')}
            </Button>
            {loading && <Spinner />}
        </nav>
    );
};
