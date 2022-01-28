import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Spinner, Button } from '../../components';
import { UserListContainer } from '../../containers';
import { fetchUsersRequest } from '../../redux/users/actions';
import { loadingSelector, usersSelector } from '../../redux/users/selectors';
import styles from './UsersPage.module.scss';

const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const isLoading = useSelector(loadingSelector);
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page'));

    useEffect(() => {
        if ((users.length && currentPage) === 0) {
            dispatch(fetchUsersRequest());
            setSearchParams('page=1');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scrollUp = useCallback(
        () =>
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            }),
        [],
    );

    return (
        <div className={styles.usersWrap}>
            <UserListContainer />
            {currentPage > 1 && (
                <Button
                    customClass={styles.usersWrap__btnUp}
                    name="scroll"
                    onHandleClick={scrollUp}
                >
                    &#10595;
                </Button>
            )}

            {isLoading && <Spinner />}
        </div>
    );
};

export default UsersPage;
