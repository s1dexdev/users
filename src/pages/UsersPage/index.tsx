import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Container, UsersList, Spinner } from '../../components';
import { fetchUsersRequest } from '../../redux/users/actions';
import { loadingSelector } from '../../redux/users/selectors';
import styles from './UsersPage.module.scss';

export const UsersPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = searchParams.get('page');

    useEffect(() => {
        if (!currentPage) {
            dispatch(fetchUsersRequest());
            setSearchParams('page=1&results=20');
        }
    }, [dispatch, currentPage, setSearchParams]);

    return (
        <div className={styles.usersWrap}>
            <Container>
                <UsersList />
                {isLoading && <Spinner />}
            </Container>
        </div>
    );
};
