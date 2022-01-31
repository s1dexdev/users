import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchUsersRequest } from '../../redux/users/actions';
import { usersSelector, loadingSelector } from '../../redux/users/selectors';
import { UserList } from '../../components';
import apiConfig from '../../api/apiConfig';

export const UserListContainer = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);
    const users = useSelector(usersSelector);
    const [searchParams, setSearchParams] = useSearchParams();
    const ulRef = useRef<HTMLUListElement>(null);

    const { params, defaultFetch, customFetch } = apiConfig;
    let currentPage = Number(searchParams.get(params.page));

    useEffect(() => {
        if (users.length && currentPage) {
            return;
        }

        dispatch(fetchUsersRequest());
        setSearchParams(`${params.page}=${defaultFetch.page}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!ulRef.current?.lastElementChild) {
            return;
        }

        const io = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                if (!isLoading) {
                    setSearchParams(`${params.page}=${++currentPage}`);
                    dispatch(
                        fetchUsersRequest({
                            page: currentPage,
                            results: customFetch.results,
                        }),
                    );
                }

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
