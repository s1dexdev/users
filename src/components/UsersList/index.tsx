import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../components';
import { fetchUsersRequest } from '../../redux/users/actions';
import { User as UserType } from '../../interfaces';
import styles from './UsersList.module.scss';
import { useSearchParams } from 'react-router-dom';
import { usersSelector } from '../../redux/users/selectors';

export const UsersList = () => {
    const dispatch = useDispatch();

    const users = useSelector(usersSelector);

    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = Number(searchParams.get('page'));
    // const [page, setPage] = useState(currentPage || 1);
    const ulRef = useRef<HTMLUListElement>(null);

    // console.log(currentPage);

    useEffect(() => {
        if (!ulRef.current?.lastElementChild) {
            return;
        }

        const fetchAdditionalUsers = () => {
            currentPage += 1;
            dispatch(fetchUsersRequest({ currentPage, results: 10 }));
            setSearchParams(`page=${currentPage}&results=${10}`);
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
