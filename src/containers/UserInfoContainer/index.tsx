import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { UserInfo } from '../../components';
import { localeSelector } from '../../redux/locale/selectors';
import { parseDate } from '../../utils/helpers';
import { User } from '../../interfaces';

interface Params {
    user: User;
}

export const UserInfoContainer = ({ user }: Params) => {
    const { t } = useTranslation();
    const locale = useSelector(localeSelector);

    const userBirthday = useMemo(
        () => parseDate(new Date(user.dob.date), locale),
        [user.dob.date, locale],
    );

    const userRegDate = useMemo(
        () => parseDate(new Date(user.registered.date), locale),
        [user.registered.date, locale],
    );

    return (
        <UserInfo
            user={user}
            userBirthday={userBirthday}
            userRegDate={userRegDate}
            translate={t}
        />
    );
};
