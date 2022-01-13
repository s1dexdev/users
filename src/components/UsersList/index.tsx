import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User } from '../../components';
import { users as usersSelector } from '../../redux/users/selectors';
import { fetchUsersRequest } from '../../redux/users/actions';
import styles from './UsersList.module.scss';
import { useOnScreen } from '../../hooks/useOnScreen';

export const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const [page, setPage] = useState(2);
    const [results, setResults] = useState(10);

    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = useRef<HTMLUListElement | null>(null);

    const isVisible = useOnScreen(imageRef, '-200px');

    useEffect(() => {
        if (!isVisible) {
            return;
        }

        if (imageRef.current) {
            console.log(isVisible);
        }
    }, [isVisible, users]);

    return (
        <ul ref={imageRef} className={styles.usersList}>
            {users.map(user => (
                <User key={user.login.uuid} user={user} />
            ))}
        </ul>
    );
};
