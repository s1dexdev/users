import { NavLink } from 'react-router-dom';
import { parseDate } from '../../utils/helpers';
import { User as IUser } from '../../interfaces';
import { navConfig } from '../../utils/constants';
import styles from './User.module.scss';

interface IProps {
    user: IUser;
}

export const User = ({ user }: IProps) => {
    const { name, picture, dob, gender } = user;

    return (
        <li className={`${styles.person} ${styles[gender]}`}>
            <NavLink
                className={styles.person__link}
                to={`${navConfig.user.path}/${user.login.uuid}`}
                state={user}
            >
                <img
                    className={styles.person__photo}
                    src={picture.large}
                    alt="User`s photo"
                    width="130"
                    height="130"
                />
                <p
                    className={styles.person__name}
                >{`${name.first} ${name.last}`}</p>
                <p className={styles.person__birthday}>
                    {parseDate(new Date(dob.date))}
                </p>
                <p className={styles.person__gender}>{gender}</p>
            </NavLink>
        </li>
    );
};
