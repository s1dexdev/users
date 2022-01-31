import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usersSelector } from '../../redux/users/selectors';
import { UserInfoContainer } from '../../containers';

const UserInfoPage = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const users = useSelector(usersSelector);

    const user = useMemo(
        () => users.find(({ login }) => login.uuid === id),
        [users, id],
    );

    return user ? (
        <UserInfoContainer user={user} />
    ) : (
        <p className="text">{t('userInfoPage.message')}</p>
    );
};

export default UserInfoPage;
