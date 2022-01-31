import { useCallback } from 'react';
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

    const parseDateCallback = useCallback(
        (date, loc) => parseDate(date, loc),
        [],
    );

    return (
        <NavLink
            className="link"
            to={`${navConfig.userInfo.path}/${user.login.uuid}`}
        >
            <User
                user={user}
                parseDateCallback={parseDateCallback}
                locale={locale}
            />
        </NavLink>
    );
};
