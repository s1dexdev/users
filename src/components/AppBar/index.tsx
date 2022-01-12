import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../../components';
import { logoutRequest } from '../../redux/auth/actions';
import { navConfig } from '../../utils/constants';
import styles from './AppBar.module.scss';

export function AppBar() {
    const dispatch = useDispatch();
    const { users, userInfo } = navConfig;

    const logout = () => dispatch(logoutRequest());

    const setStyleLink = ({ isActive }: { isActive: boolean }) =>
        `${styles.nav__link}` +
        (isActive ? ` ${styles.nav__link_activated}` : '');

    return (
        <nav className={styles.nav}>
            <NavLink end to={users.path} className={setStyleLink}>
                {users.label}
            </NavLink>
            <NavLink to={userInfo.path} className={setStyleLink}>
                {userInfo.label}
            </NavLink>
            <Button text={'Log out'} onHandleClick={logout} />
        </nav>
    );
}
