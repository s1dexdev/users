import { RefObject } from 'react';
import { Spinner, Button } from '../../components';
import { UserContainer } from '../../containers';
import { User } from '../../interfaces';
import styles from './UserList.module.scss';

interface Params {
    ulRef: RefObject<HTMLUListElement>;
    users: User[];
    loading: boolean;
    currentPage: number;
    onScrollUp: () => void;
}

export const UserList = ({
    ulRef,
    users,
    loading,
    currentPage,
    onScrollUp,
}: Params) => (
    <div className={styles.usersWrap}>
        <ul ref={ulRef} className={styles.userList}>
            {users.map(user => (
                <li key={user.login.uuid} className={styles.userList__user}>
                    <UserContainer user={user} />
                </li>
            ))}
        </ul>
        {currentPage > 1 && (
            <Button
                customClass={styles.usersWrap__btnUp}
                type="button"
                name="scroll"
                onHandleClick={onScrollUp}
            >
                &#10595;
            </Button>
        )}
        {loading && <Spinner />}
    </div>
);
