import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User } from '../../components';
import { users as usersSelector } from '../../redux/users/selectors';
import { fetchUsersRequest } from '../../redux/users/actions';
import styles from './UsersList.module.scss';
import { useOnScreen } from '../../hooks/useOnScreen';

export const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const [page, setPage] = useState(0);
    const [results, setResults] = useState(10);
    const [fetching, setFetching] = useState(false);

    const scrollHandler = (event: any) => {
        const {
            documentElement: { scrollHeight, scrollTop },
        } = event.target;

        if (scrollHeight - (scrollTop + window.innerHeight) < 100) {
            setFetching(true);
        }
    };

    useEffect(() => {
        setPage(prevState => prevState + 1);
        setFetching(false);
    }, [users]);

    useEffect(() => {
        if (fetching) {
            dispatch(fetchUsersRequest({ page, results }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return () => document.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <ul className={styles.usersList}>
            {users.map(user => (
                <User key={user.login.uuid} user={user} />
            ))}
        </ul>
    );
};
