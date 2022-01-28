import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchUsersRequest } from '../../redux/users/actions';
import { usersSelector, loadingSelector } from '../../redux/users/selectors';
import { UserList } from '../../components';

export const UserListContainer = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);
    const users = useSelector(usersSelector);
    const [searchParams, setSearchParams] = useSearchParams();
    const ulRef = useRef<HTMLUListElement>(null);
    const currentPage = Number(searchParams.get('page'));

    useEffect(() => {
        if ((users.length && currentPage) === 0) {
            dispatch(fetchUsersRequest());
            setSearchParams('page=1');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    const scrollUp = useCallback(
        () =>
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            }),
        [],
    );

    return (
        <UserList
            ulRef={ulRef}
            users={users}
            loading={isLoading}
            onScrollUp={scrollUp}
            currentPage={currentPage}
        />
    );
};
