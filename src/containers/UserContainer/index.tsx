import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { localeSelector } from '../../redux/locale/selectors';
import { User } from '../../components';
import { parseDate } from '../../utils/helpers';
import { User as IUser } from '../../interfaces';
import { navConfig } from '../../utils/constants';

interface Params {
    user: IUser;
}

export const UserContainer = ({ user }: Params) => {
    const locale = useSelector(localeSelector);

    const userBirthday = useMemo(
        () => parseDate(new Date(user.dob.date), locale),
        [user.dob.date, locale],
    );

    return (
        <NavLink
            className="link"
            to={`${navConfig.userInfo.path}/${user.login.uuid}`}
        >
            <User user={user} userBirthday={userBirthday} />
        </NavLink>
    );
};
