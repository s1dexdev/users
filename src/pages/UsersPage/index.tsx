import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, UsersList, Spinner } from '../../components';
import { fetchUsersRequest } from '../../redux/users/actions';
import { loadingSelector } from '../../redux/users/selectors';
import styles from './UsersPage.module.scss';

export const UsersPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    return (
        <div className={styles.usersWrap}>
            <Container>
                <UsersList />
                {isLoading && <Spinner />}
            </Container>
        </div>
    );
};
