import { Route, Navigate, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/';

interface IProps {
    redirectTo: string;
    children: React.ReactNode;
    restricted: boolean;
}

export const PublicRoute = ({
    redirectTo,
    children,
    ...routeProps
}: IProps & RouteProps): JSX.Element => {
    const isLoggedIn = useSelector(getIsAuthenticated);

    return (
        <Route
            {...routeProps}
            element={
                isLoggedIn && routeProps.restricted ? (
                    <Navigate replace to={redirectTo} />
                ) : (
                    children
                )
            }
        ></Route>
    );
};

export default PublicRoute;
