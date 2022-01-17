/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { User } from '../../components';
import { fetchUsersRequest } from '../../redux/users/actions';
import { usersSelector } from '../../redux/users/selectors';
import styles from './UsersList.module.scss';

export const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const [searchParams, setSearchParams] = useSearchParams();
    const ulRef = useRef<HTMLUListElement>(null);

    let page = Number(searchParams.get('page'));

    useEffect(() => {
        if (!ulRef.current?.lastElementChild) {
            return;
        }

        const fetchAdditionalUsers = () => {
            page += 1;
            setSearchParams(`page=${page}`);
            dispatch(fetchUsersRequest({ page, results: 10 }));
        };

        const io = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                fetchAdditionalUsers();
                observer.disconnect();
            }
        });

        io.observe(ulRef.current.lastElementChild);
    }, [dispatch, users]);

    return (
        <ul ref={ulRef} className={styles.usersList}>
            {users.map(user => (
                <User key={user.login.uuid} user={user} />
            ))}
        </ul>
    );
};
