import { RefObject } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContainer } from '../../containers';
import { User } from '../../interfaces';
import { navConfig } from '../../utils/constants';
import styles from './UserList.module.scss';

interface Params {
    ulRef: RefObject<HTMLUListElement>;
    users: User[];
}

export const UserList = ({ ulRef, users }: Params) => (
    <ul ref={ulRef} className={styles.userList}>
        {users.map(user => (
            <li key={user.login.uuid} className={styles.userList__user}>
                <NavLink
                    className={styles.userList__link}
                    to={`${navConfig.userInfo.path}/${user.login.uuid}`}
                >
                    <UserContainer user={user} />
                </NavLink>
            </li>
        ))}
    </ul>
);
