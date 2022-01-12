import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, UsersList } from '../../components';
import { fetchUsersRequest } from '../../redux/users/actions';

export const UsersPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    return (
        <Container>
            <UsersList />
        </Container>
    );
};
