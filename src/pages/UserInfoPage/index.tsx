import { useLocation } from 'react-router-dom';
import { UserInfo } from '../../components';
import { navConfig } from '../../utils/constants';
import { User } from '../../interfaces';
import styles from './UserInfoPage.module.scss';

export const UserInfoPage = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === navConfig.user.path ? (
                <p className={styles.text}>
                    Select a user in order to see his information
                </p>
            ) : (
                <UserInfo user={location.state as User} />
            )}
        </>
    );
};
