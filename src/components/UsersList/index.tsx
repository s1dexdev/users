import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User } from '../../components';
import { usersSelector } from '../../redux/users/selectors';
import { fetchUsersRequest } from '../../redux/users/actions';
import styles from './UsersList.module.scss';

export const UsersList = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(2);
    const users = useSelector(usersSelector);
    const ulRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!ulRef.current?.lastElementChild) {
            return;
        }

        const fetchAdditionalUsers = () => {
            dispatch(fetchUsersRequest({ page, results: 10 }));
            setPage(prevState => prevState + 1);
        };

        const io = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                fetchAdditionalUsers();
                observer.disconnect();
            }
        });

        io.observe(ulRef.current.lastElementChild);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, users]);

    return (
        <ul ref={ulRef} className={styles.usersList}>
            {users.map(user => (
                <User key={user.login.uuid} user={user} />
            ))}
        </ul>
    );
};
