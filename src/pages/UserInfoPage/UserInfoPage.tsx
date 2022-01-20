import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { UserInfo } from '../../components';
import { navConfig } from '../../utils/constants';
import { User } from '../../interfaces';
import styles from './UserInfoPage.module.scss';

const UserInfoPage = () => {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <>
            {location.pathname === navConfig.userInfo.path ? (
                <p className={styles.text}>{t('userInfoPage.message')}</p>
            ) : (
                <UserInfo user={location.state as User} />
            )}
        </>
    );
};

export default UserInfoPage;
