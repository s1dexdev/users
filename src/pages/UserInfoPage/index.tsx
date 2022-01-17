import { Location, useLocation } from 'react-router-dom';
import { UserInfo, Container } from '../../components';
import { navConfig } from '../../utils/constants';
import { User } from '../../interfaces';

interface State {
    user: User;
    from: Location;
}

export const UserInfoPage = () => {
    const { pathname, state } = useLocation();
    const { user } = state as State;
    const { userInfo } = navConfig;

    return (
        <Container>
            {pathname === userInfo.path ? (
                <p>Please, choose a User</p>
            ) : (
                <UserInfo user={user} />
            )}
        </Container>
    );
};
