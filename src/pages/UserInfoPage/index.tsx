import { useLocation } from 'react-router-dom';
import { User } from '../../components';
import { navConfig } from '../../utils/constants';
import { User as IUser } from '../../interfaces';

export const UserInfoPage = () => {
    const { pathname, state } = useLocation();
    const user = state as IUser;
    const { userInfo } = navConfig;

    return (
        <>
            <h1>User info page</h1>
            {pathname === userInfo.path ? (
                <p>Please, choose a User</p>
            ) : (
                <User user={user} />
            )}
        </>
    );
};
