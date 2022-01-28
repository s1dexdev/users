import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchUsersRequest } from '../../redux/users/actions';
import { usersSelector } from '../../redux/users/selectors';
import { UserList } from '../../components';

export const UserListContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const [searchParams, setSearchParams] = useSearchParams();
    const ulRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!ulRef.current?.lastElementChild) {
            return;
        }

        let page = Number(searchParams.get('page'));

        const io = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                setSearchParams(`page=${++page}`);
                dispatch(fetchUsersRequest({ page, results: 10 }));

                observer.disconnect();
            }
        });

        io.observe(ulRef.current.lastElementChild);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users]);

    return <UserList ulRef={ulRef} users={users} />;
};
