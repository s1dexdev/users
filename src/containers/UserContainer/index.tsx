import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { localeSelector } from '../../redux/locale/selectors';
import { User } from '../../components';
import { parseDate } from '../../utils/helpers';
import { User as IUser } from '../../interfaces';

interface Params {
    user: IUser;
}

export const UserContainer = ({ user }: Params) => {
    const locale = useSelector(localeSelector);

    const parseDateCallback = useCallback(parseDate, []);

    return (
        <User
            user={user}
            parseDateCallback={parseDateCallback}
            locale={locale}
        />
    );
};
