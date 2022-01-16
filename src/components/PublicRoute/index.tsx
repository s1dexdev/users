import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthenticatedSelector } from '../../redux/auth/selectors';
import { navConfig } from '../../utils/constants';

interface IProps {
    component: React.ComponentType;
}

export const PublicRoute = ({ component: Component }: IProps) => {
    const isAuth = useSelector(isAuthenticatedSelector);
    const { users } = navConfig;

    return isAuth ? <Navigate replace to={users.path} /> : <Component />;
};
