import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../redux/auth/selectors';
import { navConfig } from '../../utils/constants';

interface IProps {
    component: React.ComponentType;
    path?: string;
}

export const PrivateRoute = ({ component: Component, path }: IProps) => {
    const isAuth = useSelector(isAuthenticated);
    const { login } = navConfig;

    path = path || login.path;

    return isAuth ? <Component /> : <Navigate to={path} />;
};
