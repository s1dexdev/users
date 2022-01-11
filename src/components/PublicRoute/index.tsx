import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../redux/auth/selectors';
import { navConfig } from '../../utils/constants';

interface IProps {
    component: React.ComponentType;
}

export function PublicRoute({ component: Component }: IProps): JSX.Element {
    const isAuth = useSelector(isAuthenticated);
    const { users } = navConfig;

    return isAuth ? <Navigate replace to={users.path} /> : <Component />;
}
