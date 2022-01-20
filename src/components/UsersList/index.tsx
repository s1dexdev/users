import { useState, useEffect, useRef } from 'react';
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
    const [loading, setLoading] = useState(false);
    const ulRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        let page = Number(searchParams.get('page'));

        if (loading) {
            page += 1;
            dispatch(fetchUsersRequest({ page, results: 10 }));
            setSearchParams(`page=${page}`);
            setLoading(false);
        }
    }, [loading, dispatch, searchParams, setSearchParams]);

    useEffect(() => {
        if (!ulRef.current?.lastElementChild) {
            return;
        }

        const io = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                setLoading(true);
                observer.disconnect();
            }
        });

        io.observe(ulRef.current.lastElementChild);
    }, [users]);

    return (
        <ul ref={ulRef} className={styles.usersList}>
            {users.map(user => (
                <User key={user.login.uuid} user={user} />
            ))}
        </ul>
    );
};
