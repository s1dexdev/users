/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Container, UsersList, Spinner } from '../../components';
import { fetchUsersRequest } from '../../redux/users/actions';
import { loadingSelector, usersSelector } from '../../redux/users/selectors';
import styles from './UsersPage.module.scss';

export const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const isLoading = useSelector(loadingSelector);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const page = Number(searchParams.get('page'));

        if ((users.length && page) === 0) {
            dispatch(fetchUsersRequest());
            setSearchParams('page=1');
        }
    }, [dispatch, users]);

    return (
        <div className={styles.usersWrap}>
            <Container>
                <UsersList />
                {isLoading && <Spinner />}
            </Container>
        </div>
    );
};
