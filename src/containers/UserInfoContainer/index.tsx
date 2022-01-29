import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserInfo } from '../../components';
import { localeSelector } from '../../redux/locale/selectors';
import { usersSelector } from '../../redux/users/selectors';
import { parseDate } from '../../utils/helpers';

export const UserInfoContainer = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const locale = useSelector(localeSelector);
    const users = useSelector(usersSelector);

    const user = useMemo(
        () => users.find(({ login }) => login.uuid === id),
        [users, id],
    );

    const parseDateCallback = useCallback(parseDate, []);

    return user ? (
        <UserInfo
            user={user}
            locale={locale}
            parseDateCallback={parseDateCallback}
            translate={t}
        />
    ) : (
        <p className="text">{t('userInfoPage.message')}</p>
    );
};
