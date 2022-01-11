import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../';
import { logoutRequest } from '../../redux/auth/actions';
import { navConfig } from '../../utils/constants';
import styles from './AppBar.module.scss';

export function AppBar() {
    const dispatch = useDispatch();
    const { users, userInfo } = navConfig;
    const logout = () => dispatch(logoutRequest());

    return (
        <nav className={styles.nav}>
            <Link className={styles.nav__link} to={users.path}>
                Users
            </Link>
            <Link className={styles.nav__link} to={userInfo.path}>
                User info
            </Link>
            <Button text={'Log out'} onHandleClick={logout} />
        </nav>
    );
}
